"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/test.ts
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// テスト用のエンドポイントをここに定義
router.post('/reset-db', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$transaction([
            prisma.todo.deleteMany(),
            prisma.user.deleteMany()
        ]);
        const hashedPassword = yield bcrypt_1.default.hash('password123', 10);
        const testUser = yield prisma.user.create({
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
}));
exports.default = router;
