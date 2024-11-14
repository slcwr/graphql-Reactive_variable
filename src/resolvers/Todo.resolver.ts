// src/resolvers/todo.resolver.ts
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { Todo } from '../schema/types';

const prisma = new PrismaClient();

@Resolver(Todo)
export class TodoResolver {
  @Query(() => [Todo])
  async todos() {
    return prisma.todo.findMany({
      include: {
        user: true,
      },
    });
  }

  @Query(() => Todo, { nullable: true })
  async todo(@Arg('id', () => Int) id: number) {
    return prisma.todo.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg('description') description: string,
    @Arg('userId', () => Int) userId: number,
  ) {
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