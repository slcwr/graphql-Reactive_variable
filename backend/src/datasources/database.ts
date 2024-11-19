// src/datasources/database.ts
import { RESTDataSource } from '@apollo/datasource-rest';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// 入力データの型定義
interface CreateUserInput {
  username: string;  // nameからusernameに変更
  password: string;
}

export class DatabaseSource extends RESTDataSource {
  private prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = new PrismaClient();
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }
    });
  }

  async createUser(data: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        username: data.username,
        password: data.password
      }
    });
  }


  async loginUser(username: string, password: string): Promise<{ user: User; token: string } | null> {
    const user = await this.prisma.user.findUnique({
      where: { username }
    });
  
    if (!user) return null;
  
    // パスワードの検証
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;
  
    // JWTトークンの生成
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );
  
    return { user, token };
  }

  // Todoに関するメソッドも追加
  async getTodos() {
    return this.prisma.todo.findMany({
      include: {
        user: true
      }
    });
  }

  async createTodo(data: { description: string; userId: number }) {
    return this.prisma.todo.create({
      data,
      include: {
        user: true
      }
    });
  }

  // リソースのクリーンアップ
  async disconnect() {
    await this.prisma.$disconnect();
  }
}