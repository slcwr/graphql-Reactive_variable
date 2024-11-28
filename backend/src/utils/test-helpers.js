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
exports.resetDatabase = resetDatabase;
// backend/src/utils/test-helpers.ts
const database_1 = __importDefault(require("../config/database"));
function resetDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default.$transaction([
            database_1.default.todo.deleteMany(),
            database_1.default.user.deleteMany()
        ]);
        // シードデータの再投入
        yield database_1.default.$executeRaw `SELECT setval('"User_id_seq"', 1, false)`;
        yield database_1.default.$executeRaw `SELECT setval('"Todo_id_seq"', 1, false)`;
    });
}
