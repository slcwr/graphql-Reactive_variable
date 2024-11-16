import jwt from 'jsonwebtoken';
export function authMiddleware(req, res, next) {
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
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("User set in middleware:", req.user);
        next();
        return Promise.resolve();
    }
    catch (error) {
        console.error('Token verification failed:', error);
        if (error instanceof jwt.JsonWebTokenError) {
            console.log('Invalid token');
        }
        else if (error instanceof jwt.TokenExpiredError) {
            console.log('Token expired');
        }
        else {
            console.log('Unknown error');
        }
        res.status(401).json({ authenticated: false, message: "無効なトークンです" });
        return Promise.resolve();
    }
}
//# sourceMappingURL=auth.js.map