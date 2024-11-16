// src/datasources/database.ts
import { RESTDataSource } from '@apollo/datasource-rest';
import { PrismaClient } from '@prisma/client';
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
            data
        });
    }
}
//# sourceMappingURL=database.js.map