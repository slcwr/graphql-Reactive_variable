// backend/src/utils/test-helpers.ts
import prisma from '../config/database';
export async function resetDatabase() {
    await prisma.$transaction([
        prisma.todo.deleteMany(),
        prisma.user.deleteMany()
    ]);
    // シードデータの再投入
    await prisma.$executeRaw `SELECT setval('"User_id_seq"', 1, false)`;
    await prisma.$executeRaw `SELECT setval('"Todo_id_seq"', 1, false)`;
}
//# sourceMappingURL=test-helpers.js.map