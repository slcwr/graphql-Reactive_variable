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
exports.DatabaseSource = void 0;
// src/datasources/database.ts
const datasource_rest_1 = require("@apollo/datasource-rest");
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class DatabaseSource extends datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.prisma = new client_1.PrismaClient();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findMany();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findUnique({
                where: { id }
            });
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.create({
                data: {
                    username: data.username,
                    password: data.password
                }
            });
        });
    }
    loginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findUnique({
                where: { username }
            });
            if (!user)
                return null;
            // パスワードの検証
            const isValid = yield bcrypt_1.default.compare(password, user.password);
            if (!isValid)
                return null;
            // JWTトークンの生成
            const token = jsonwebtoken_1.default.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '24h' });
            return { user, token };
        });
    }
    // Todoに関するメソッドも追加
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.todo.findMany({
                include: {
                    user: true
                }
            });
        });
    }
    createTodo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.todo.create({
                data,
                include: {
                    user: true
                }
            });
        });
    }
    // リソースのクリーンアップ
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.$disconnect();
        });
    }
}
exports.DatabaseSource = DatabaseSource;
