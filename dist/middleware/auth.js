import { verifyToken } from '../utils/jwt.js';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    let token;
    if (typeof authHeader === 'string') {
        token = authHeader.split(' ')[1];
    }
    else if (Array.isArray(authHeader)) {
        token = authHeader[0].split(' ')[1];
    }
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
//# sourceMappingURL=auth.js.map