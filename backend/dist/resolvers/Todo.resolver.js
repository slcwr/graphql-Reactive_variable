var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// src/resolvers/todo.resolver.ts
import { Resolver, Query, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { Todo } from '../schema/Types';
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
let TodoResolver = class TodoResolver {
    async todos({ prisma }) {
        const todos = await prisma.todo.findMany({
            include: {
                user: true
            }
        });
        // Prismaの結果をGraphQL型に合わせて変換
        return todos.map(todo => ({
            ...todo,
            user: {
                ...todo.user,
                todos: [] // 必要に応じて todos を取得
            }
        }));
    }
    async todo(id, { prisma }) {
        const todo = await prisma.todo.findUnique({
            where: { id },
            include: {
                user: true
            }
        });
        if (!todo)
            return null;
        return {
            ...todo,
            user: {
                ...todo.user,
                todos: [] // 必要に応じて todos を取得
            }
        };
    }
    async createTodo(description, userId, { prisma }) {
        const todo = await prisma.todo.create({
            data: {
                description,
                userId,
            },
            include: {
                user: true
            }
        });
        return {
            ...todo,
            user: {
                ...todo.user,
                todos: [] // 必要に応じて todos を取得
            }
        };
    }
};
__decorate([
    Query(() => [Todo]),
    __param(0, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todos", null);
__decorate([
    Query(() => Todo, { nullable: true }),
    __param(0, Arg('id', () => Int)),
    __param(1, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todo", null);
__decorate([
    Mutation(() => Todo),
    __param(0, Arg('description', () => String)),
    __param(1, Arg('userId', () => Int)),
    __param(2, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
TodoResolver = __decorate([
    Resolver(of => Todo)
], TodoResolver);
export { TodoResolver };
//# sourceMappingURL=Todo.resolver.js.map