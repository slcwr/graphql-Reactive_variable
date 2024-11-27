// src/routes/test.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const router = express.Router();
const prisma = new PrismaClient();
// テスト用のエンドポイントをここに定義
router.post('/reset-db', async (req, res) => {
    try {
        await prisma.$transaction([
            prisma.todo.deleteMany(),
            prisma.user.deleteMany()
        ]);
        const hashedPassword = await bcrypt.hash('password123', 10);
        const testUser = await prisma.user.create({
            data: {
                username: 'testuser',
                password: hashedPassword,
                todos: {
                    create: [{ description: 'Test todo 1' }]
                }
            },
            include: { todos: true }
        });
        res.json({ message: 'Database reset successful', user: testUser });
    }
    catch (error) {
        console.error('Database reset error:', error);
        res.status(500).json({ error: 'Database reset failed' });
    }
});
export default router;
//# sourceMappingURL=test.js.map