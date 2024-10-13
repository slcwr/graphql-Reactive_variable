import { Router } from 'express';
import { AppDataSource } from '../data-source.js';
import { User } from '../entity/User.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.js';
const router = Router();
const registerHandler = async (req, res, next) => {
    const { username, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({ where: { username } });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({ username, password: hashedPassword });
    await userRepository.save(user);
    res.status(201).json({ message: 'User registerd successfully' });
};
const loginHandler = async (req, res, next) => {
    const { username, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user.id);
    res.json({ token });
};
router.post('/register', registerHandler);
router.post('/login', loginHandler);
// router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
//     const { username, password } = req.body
//     const userRepository = AppDataSource.getRepository(User)
//     const existingUser = await userRepository.findOne({ where: { username }})
//     if (existingUser) {
//         return res.status(400).json({ message: 'Username already exists'})
//     }
//     const hashedPassword = await bcrypt.hash(password, 10)
//     const user = userRepository.create({ username, password: hashedPassword})
//     await userRepository.save(user)
//     res.status(201).json({ message: 'User registerd successfully'})
// })
// router.post('/login', async(req: Request, res: Response, next: NextFunction) => {
//     const { username, password } = req.body
//     const userRepository = AppDataSource.getRepository(User)
//     const user = await userRepository.findOne({ where: { username }})
// if(!user){
//     return res.status(401).json({ message: 'Invalid credentials'})
// }
// const isPasswordValid = await bcrypt.compare(password, user.password)
// if (!isPasswordValid){
//     return res.status(401).json({ message: 'Invalid credentials'})
// }
// const token = generateToken(user.id)
// res.json({ token })
// })
export default router;
//# sourceMappingURL=auth.js.map