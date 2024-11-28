"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/config/database.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: process.env.NODE_ENV === 'test'
                ? process.env.TEST_DATABASE_URL
                : process.env.DATABASE_URL
        }
    },
    // デバッグログの設定
    log: process.env.NODE_ENV === 'test'
        ? ['error']
        : ['query', 'error', 'warn']
});
exports.default = prisma;
