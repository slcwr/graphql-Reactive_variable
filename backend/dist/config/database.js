// backend/src/config/database.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
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
export default prisma;
//# sourceMappingURL=database.js.map