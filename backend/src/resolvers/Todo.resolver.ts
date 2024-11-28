// src/resolvers/todo.resolver.ts
import { Resolver, Query, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Todo } from '../schema/Types';

interface Context {
  prisma: PrismaClient
}

@Resolver(() => Todo)
export class TodoResolver {
  @Query(() => [Todo])
  async todos(
    @Ctx() { prisma }: Context
  ): Promise<Todo[]> {
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

  @Query(() => Todo, { nullable: true })
  async todo(
    @Arg('id', () => Int) id: number,
    @Ctx() { prisma }: Context
  ): Promise<Todo | null> {
    const todo = await prisma.todo.findUnique({
      where: { id },
      include: {
        user: true
      }
    });

    if (!todo) return null;

    return {
      ...todo,
      user: {
        ...todo.user,
        todos: [] // 必要に応じて todos を取得
      }
    };
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg('description', () => String) description: string,
    @Arg('userId', () => Int) userId: number,
    @Ctx() { prisma }: Context
  ): Promise<Todo> {
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
}