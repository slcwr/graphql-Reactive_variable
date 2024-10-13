import express from 'express';
import { AppDataSource } from './data-source.js';
import authRoutes from './routes/auth.js';
import { authMiddleware } from './middleware/auth.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});
AppDataSource.initialize().then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map