import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'

export const generateToken = (userId: number, username: string): string => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h'})
}

export function verifyToken(token: string): { userId: number; username: string } | null {
    try {
      return jwt.verify(token, SECRET_KEY) as { userId: number; username: string };
    } catch (error) {
      return null;
    }
  }