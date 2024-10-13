
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// カスタムインターフェースを定義
 export interface AuthenticatedRequest extends Request {
     user?: { userId: number; username: string };
 }

export function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  console.log('Request headers:', req.headers);
  console.log('All cookies:', req.cookies);
  const token = req.cookies.token;
  console.log("token", token);

  if (!token) {
      console.log('No token found');
      res.status(401).json({ authenticated: false, message: "認証が必要です" });
      return Promise.resolve();
  }

  if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not set');
      res.status(500).json({ message: "サーバー設定エラー" });
      return Promise.resolve();
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: number; username: string };
      req.user = decoded;
      console.log("User set in middleware:", req.user);
      next();
      return Promise.resolve();
  } catch (error) {
      console.error('Token verification failed:', error);
      if (error instanceof jwt.JsonWebTokenError) {
          console.log('Invalid token');
      } else if (error instanceof jwt.TokenExpiredError) {
          console.log('Token expired');
      } else {
          console.log('Unknown error');
      }
      res.status(401).json({ authenticated: false, message: "無効なトークンです" });
      return Promise.resolve();
  }
}