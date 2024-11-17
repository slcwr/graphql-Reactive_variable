// src/datasources/database.ts
import { RESTDataSource } from '@apollo/datasource-rest';
import { PrismaClient, User } from '@prisma/client';

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