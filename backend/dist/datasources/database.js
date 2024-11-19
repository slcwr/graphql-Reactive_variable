// src/datasources/database.ts
import { RESTDataSource } from '@apollo/datasource-rest';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export class DatabaseSource extends RESTDataSource {
    constructor() {
        super();
        this.prisma = new PrismaClient();
    }
    async getUsers() {
        return this.prisma.user.findMany();
    }
    async getUserById(id) {
        return this.prisma.user.findUnique({
            where: { id }
        });
    }
    async createUser(data) {
        return this.prisma.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });
    }
    async loginUser(username, password) {
        const user = await this.prisma.user.findUnique({
            where: { username }
        });
        if (!user)
            return null;
        // パスワードの検証
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid)
            return null;
        // JWTトークンの生成
        const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '24h' });
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
    async createTodo(data) {
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
//# sourceMappingURL=database.js.map