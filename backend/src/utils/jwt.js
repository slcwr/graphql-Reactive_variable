"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
function verifyToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, SECRET_KEY);
    }
    catch (error) {
        console.error('エラーが発生しました:', error);
        return null;
    }
}
