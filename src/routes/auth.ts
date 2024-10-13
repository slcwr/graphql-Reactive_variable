// auth.ts
import { RequestHandler } from 'express'
import express from 'express'
import { Router } from 'express';
import { Request, Response, NextFunction } from 'express'
import { getConnection } from '../data-source.js';
import { Users } from '../entity/Users.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/jwt.js'
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';
import jwt from 'jsonwebtoken';
import { TodoController } from 'controllers/todoController.js';
import { body, validationResult, ValidationError } from 'express-validator';



const app = express()
const router = express.Router();

export interface AuthenticatedRequest extends Request {
    user?: any // または適切な型を指定
}

interface RegisterRequestBody {
    username: string;
    password: string;
}

const registerHandler: RequestHandler<{}, any, RegisterRequestBody> = async (req: Request, res: Response, next: NextFunction): Promise<void | Response | any> => {
    const { username, password } = req.body
    const connection = await getConnection();
    const userRepository = connection.getRepository(Users);
  
    try {
    const existingUser = await userRepository.findOne({ where: { username } })
    if (existingUser) {
        return res.status(400).json({ message: 'ユーザー名が既に存在します' })
    }

    // saltRoundsを定義（例：10）
    const saltRounds = 10;
    console.log('SaltRounds:', saltRounds); // デバッグ情報

     // パスワードが undefined または空文字列でないことを確認
     if (!password) {
        throw new Error('パスワードが提供されていません');
    }

    // bcrypt.hashを使用する際に、saltRoundsを第2引数として渡す
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = userRepository.create({ username, password: hashedPassword })
    await userRepository.save(user)

    res.status(201).json({ message: 'ユーザーが正常に登録されました' });
    } catch (error) {
        console.error('ユーザー登録エラー:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    }
};

const loginHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void | Response | any> => {
    const { username, password } = req.body
    const connection = await getConnection();
    const userRepository = connection.getRepository(Users);

    const user = await userRepository.findOne({ where: { username } })

    if (!user) {
        return res.status(401).json({ message: '無効な資格情報' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(401).json({ message: '無効な資格情報' })
    }

    const token = generateToken(user.id, user.username);
    res.json({ token })
};


//router.post('/login', UserController.login);

  router.post('/login', 
    [
      // バリデーションルールを定義
      body('username').notEmpty().withMessage('ユーザー名は必須です'),
      body('password').isLength({ min: 5 }).withMessage('パスワードは5文字以上である必要があります')
    ],
    async (req: Request, res: Response) => {
      // バリデーション結果の確認
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ success: false, errors: errors.array() });
      }

      // バリデーションが成功した場合の処理
      const { username, password } = req.body;
      console.log(req.body);
      try {
        // UserController.loginを関数として呼び出す
        const result = await UserController.login(req, res);
        //res.json({ success: true, user: result });
      } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ success: false, message: 'ログイン処理中にエラーが発生しました' });
      }
    }}
);


  app.use((err: Error, req: Request, res: Response, next: NextFunction) :void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const validationErrors = errors.array().map((error: ValidationError) => ({
          [error.type === 'field' ? error.path : error.type]: error.msg
        }));
        res.status(400).json({ errors: validationErrors });
      }
    res.status(500).json({ message: err.message });
  });


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    // JWTトークンを保存しているクッキーを削除
    res.clearCookie('token');
    
    // ローカルストレージのクリアをクライアントに指示
    res.send(`
      <script>
        localStorage.removeItem('user');
        window.location.href = '/login';
      </script>
    `);
    res.render('index');
  });

router.get('/register', (req, res) => {
    res.render('register');
});


app.use(authMiddleware);
router.get('/mypage', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
    const username = req.query.username as string;
    res.render('mypage', { username: username || req.user?.username });
});

router.get('/admin', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
    res.render('admin');
});


router.get('/users', authMiddleware,UserController.getAllUsers);
router.post('/register', UserController.createUser);
router.put('/users/:id', authMiddleware,UserController.updateUser);
router.delete('/users/:id', authMiddleware,UserController.deleteUser);
router.post('/api/todos', TodoController.createTodo);
//router.get('/api/todos/:id', TodoController.getAllTodos);
router.get('/api/todos/:id', (req: express.Request, res: express.Response) => {
    TodoController.getAllTodos(req, res);
  });

router.delete('/api/todos/:id', TodoController.deleteTodo);
router.put('/api/todos/:id', (req: express.Request, res: express.Response) => {
    TodoController.updateTodo(req, res);
  });
export default router;

