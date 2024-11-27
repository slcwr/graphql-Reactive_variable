// src/resolvers/User.resolver.ts
import { Resolver, Query, Mutation, Arg, Ctx, ObjectType, Field } from 'type-graphql';
import { User } from '../schema/Types';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// コンテキストの型定義
interface Context {
  prisma: PrismaClient;
}

@ObjectType()
class AuthPayload {
  @Field(() => String)
  token!: string;

  @Field(() => User)
  user!: User;
}

@Resolver(() => User)
export class UserResolver {
  // AuthPayload型の定義


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
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: {
        username,
        password: hashedPassword
      }
    });
  }

  @Mutation(() => AuthPayload)
async login(
  @Arg('username', () => String) username: string,  
  @Arg('password', () => String) password: string,  
  @Ctx() { prisma }: Context
): Promise<AuthPayload> {
  const user = await prisma.user.findUnique({
    where: { username },
    include: {
      todos: {
        include: {
          user: true
        }
      }
    } as const // 型アサーションを追加
  });

    if (!user) {
      throw new Error('User not found');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return {
      token,
      user
    };
  }
}