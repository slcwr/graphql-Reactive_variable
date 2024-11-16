// src/resolvers/User.resolver.ts
import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../schema/types';
import { PrismaClient } from '@prisma/client';

// コンテキストの型定義
interface Context {
  prisma: PrismaClient;
}

@Resolver(of => User)
export class UserResolver {
  @Query(() => [User])
  async users(
    @Ctx() { prisma }: Context  // コンテキストからPrismaクライアントを取得
  ): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(
    @Arg('username', () => String) username: string,
    @Arg('password', () => String) password: string,
    @Ctx() { prisma }: Context  // コンテキストからPrismaクライアントを取得
  ): Promise<User> {
    return prisma.user.create({
      data: {
        username,
        password
      }
    });
  }
}