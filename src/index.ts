import "reflect-metadata";
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { getConnection, initializeDatabase } from "./data-source.js";
import authRoutes from './routes/auth.js'
import { authMiddleware,  AuthenticatedRequest } from './middleware/auth.js'
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createConnection } from "typeorm";
import cookieParser from 'cookie-parser';
import mypageRoutes from './routes/auth';
import cors from 'cors';

dotenv.config();
const app = express()
// CORS設定
app.use(cors({
    origin: 'http://localhost:3000', // フロントエンドのURLに合わせて変更
    credentials: true
  }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
try {
    await initializeDatabase();


app.use(mypageRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
dotenv.config();

app.use('/', authRoutes)
app.use('/api', authRoutes);
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
} catch (error) {
console.error('Failed to start server:', error);
process.exit(1);
}
}

startServer();



