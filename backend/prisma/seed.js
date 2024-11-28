"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// prisma/seed.ts
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Start seeding...');
        // データベース接続テスト
        try {
            yield prisma.$connect();
            console.log('Database connected successfully');
        }
        catch (error) {
            console.error('Database connection failed:', error);
            return;
        }
        // 既存のデータを削除（オプション）
        yield prisma.todo.deleteMany();
        yield prisma.user.deleteMany();
        // ユーザーの作成
        const user1 = yield prisma.user.create({
            data: {
                username: 'user1',
                password: yield bcrypt.hash('password123', 10),
                todos: {
                    create: [
                        {
                            description: 'Todo 1 for user1'
                        },
                        {
                            description: 'Todo 2 for user1'
                        }
                    ]
                }
            }
        });
        const user2 = yield prisma.user.create({
            data: {
                username: 'user2',
                password: yield bcrypt.hash('password456', 10),
                todos: {
                    create: [
                        {
                            description: 'Todo 1 for user2'
                        },
                        {
                            description: 'Todo 2 for user2'
                        }
                    ]
                }
            }
        });
        // テストユーザーのパスワードをハッシュ化
        const hashedPassword = yield bcrypt.hash('password123', 10);
        // テストユーザーの作成
        const testUser = yield prisma.user.upsert({
            where: { username: 'testuser' },
            update: {},
            create: {
                username: 'testuser',
                password: hashedPassword,
                todos: {
                    create: [
                        { description: 'Testuser todo 1' },
                        { description: 'Testuser todo 2' }
                    ]
                }
            },
            include: {
                todos: true
            }
        });
        console.log({ testUser });
        console.log('Created users:', { user1, user2 });
        console.log('Seeding finished.');
    });
}
main()
    .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
