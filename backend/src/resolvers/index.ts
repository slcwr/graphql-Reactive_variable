// src/resolvers/index.ts
import { ApolloServer } from '@apollo/server';
import prisma from '../db/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DatabaseSource } from '../datasources/database'
import cors from 'cors';
import express from 'express';
import { json } from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

const app = express();
const httpServer = http.createServer(app);


// コンテキストの型定義
interface MyContext {
  dataSources: {
    db: DatabaseSource;
  };
}

const typeDefs = `#graphql
  type User {
    id: Int!
    username: String!
    password: String!
    todos: [Todo!]!
    createdAt: String
    updatedAt: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Todo {
    id: Int!
    description: String!
    user: User!
  }

  type Query {
    users: [User!]!
    todos: [Todo!]!
    user(id: Int!): User
  }

  type Mutation {
    login(username: String!, password: String!): AuthPayload!
    createUser(username: String!, password: String!): User!
    updateUser(id: Int!, username: String, password: String): User!
    deleteUser(id: Int!): User!
    createTodo(description: String!, userId: Int!): Todo!
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany({
        include: {
          todos: true
        }
      });
    },
    todos: async () => {
      return prisma.todo.findMany({
        include: {
          user: true
        }
      });
    },
    user: async (_: any, { id }: any) => {
      return prisma.user.findUnique({
        where: { id },
        include: {
          todos: true
        }
      });
    }
  },
  Mutation: {
    login: async (_: any, { username, password }: { username: string, password: string }, { dataSources }: any) => {
      const user = await prisma.user.findUnique({
        where: { username },
        include: {
          todos: true
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      // パスワードの検証
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error('Invalid password');
      }

      // JWTトークンの生成
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      return {
        token,
        user: {
          ...user,
          password: undefined // パスワードを除外
        }
      };
      
    },
    createUser: (_: any, { username, password }: { username: string, password: string }, { dataSources }: any) => {
      return dataSources.db.createUser({ username, password });
    }
  }
};

async function startApolloServer() {
  console.log('Defined mutations:', typeDefs.match(/type Mutation {([^}]+)}/)?.[1]);
// サーバーの設定
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// サーバーの起動
await server.start();

app.use(
  '/graphql',
  cors<cors.CorsRequest>({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({
      prisma,
      dataSources: {
        db: new DatabaseSource()
      }
    })
  })
);

await new Promise<void>((resolve) => 
  httpServer.listen({ port: 4001 }, resolve)
);
}

// サーバーの起動とエラーハンドリング
startApolloServer().catch((err) => {
  console.error('Error starting server:', err);
});
