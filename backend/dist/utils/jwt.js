import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';
export const generateToken = (userId, username) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};
export function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    }
    catch (error) {
        return null;
    }
}
//# sourceMappingURL=jwt.js.map