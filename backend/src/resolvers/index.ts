// src/resolvers/index.ts
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import prisma from '../db/prisma';

const typeDefs = `#graphql
  type User {
    id: Int!
    username: String!
    todos: [Todo!]!
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
    createTodo: async (_: any, { description, userId }: any) => {
      return prisma.todo.create({
        data: {
          description,
          userId
        },
        include: {
          user: true
        }
      });
    }
  }
};

// サーバーの設定
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// サーバーの起動
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 }
  });
  console.log(`🚀 Server ready at ${url}`);
}

startServer();