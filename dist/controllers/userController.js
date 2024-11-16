import { getConnection } from 'typeorm';
import { Users } from '../entity/Users';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';
export class UserController {
    static async getAllUsers(req, res) {
        console.log("getAllUsers");
        const connection = getConnection();
        const users = await connection.manager.find(Users, { select: ["id", "username", "password"] });
        res.render('users', { users: users });
    }
    static async createUser(req, res) {
        const { username, password } = req.body;
        const connection = getConnection();
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new Users();
            newUser.username = username;
            newUser.password = hashedPassword;
            await connection.manager.save(newUser);
            res.status(201).json({ message: "ユーザーが正常に作成されました", userId: newUser.id });
        }
        catch (error) {
            res.status(400).json({ message: "ユーザーの作成エラー", error });
        }
    }
    static async login(req, res) {
        console.log(req.body);
        if (!req.body) {
            return res.status(400).json({ message: "リクエストボディが空です" });
        }
        const { username, password } = req.body;
        const connection = getConnection();
        try {
            const user = await connection.manager.findOne(Users, { where: { username } });
            if (!user) {
                return res.status(401).json({ message: "ユーザー名またはパスワードが間違っています" });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "ユーザー名またはパスワードが間違っています" });
            }
            // JWTトークンを生成
            const token = generateToken(user.id, user.username);
            console.log("token:", token);
            // トークンをクッキーに設定
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                path: '/',
                maxAge: 3600000 // 1時間有効
            });
            console.log('Set cookie:', res.getHeader('Set-Cookie')); // 設定されたクッキーをログ出力
            // JSONレスポンスを返す
            res.status(200).json({
                success: true,
                message: "ログイン成功",
                user: { id: user.id, username: user.username }
            });
        }
        catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: "ログイン処理中にエラーが発生しました" });
        }
    }
    static async updateUser(req, res) {
        const id = parseInt(req.params.id);
        const { username } = req.body;
        const connection = getConnection();
        try {
            const user = await connection.manager.findOneOrFail(Users, id);
            user.username = username || user.username;
            await connection.manager.save(user);
            res.json({ message: "ユーザーが正常に更新されました" });
        }
        catch (error) {
            res.status(404).json({ message: "ユーザーが見つかりません" });
        }
    }
    static async deleteUser(req, res) {
        const id = parseInt(req.params.id);
        const connection = getConnection();
        try {
            const user = await connection.manager.findOne(Users, id);
            if (user) {
                await connection.manager.remove(user);
                res.json({ message: "ユーザーは正常に削除されました" });
            }
            else {
                res.status(404).json({ message: "ユーザーが見つかりません" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "ユーザーの削除中にエラーが発生しました" });
        }
    }
}
//# sourceMappingURL=userController.js.map