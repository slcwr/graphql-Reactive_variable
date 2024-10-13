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
const data_source_1 = require("../data-source");
const User_1 = require("../entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
const express = require('express');
const router = express.Router();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    const existingUser = yield userRepository.findOne({ where: { username } });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const user = userRepository.create({ username, password: hashedPassword });
    yield userRepository.save(user);
    res.status(201).json({ message: 'User registerd successfully' });
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    const user = yield userRepository.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = (0, jwt_1.generateToken)(user.id);
    res.json({ token });
}));
exports.default = router;
