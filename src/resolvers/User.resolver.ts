// src/resolvers/user.resolver.ts
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { User } from '../schema/types';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users() {
    return prisma.user.findMany({
      include: {
        todos: true,
      },
    });
  }

  @Mutation(() => User)
  async createUser(
    @Arg('username') username: string,
    @Arg('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
      include: {
        todos: true,
      },
    });
  }
}