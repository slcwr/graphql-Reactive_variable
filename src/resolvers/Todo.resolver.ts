// src/resolvers/todo.resolver.ts
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Todo } from '../schema/types';

const prisma = new PrismaClient();

interface Context {
  prisma: PrismaClient;
}

@Resolver(of => Todo)
export class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return prisma.todo.findMany({
      include: {
        user: true,
      },
    });
  }

  @Query(() => Todo, { nullable: true })
  async todo(
    @Arg('id', () => Int) id: number
  ): Promise<Todo | null> {
    return prisma.todo.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg('description', () => String) description: string,
    @Arg('userId', () => Int) userId: number
  ): Promise<Todo> {
    return prisma.todo.create({
      data: {
        description,
        userId,
      },
      include: {
        user: true,
      },
    });
  }
}