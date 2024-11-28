"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const client_1 = require("@prisma/client");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
//import bcrypt from 'bcrypt';
const test_1 = __importDefault(require("./routes/test"));
// Resolversのインポート
const User_resolver_js_1 = require("./resolvers/User.resolver.js");
const Todo_resolver_js_1 = require("./resolvers/Todo.resolver.js");
// Prismaクライアントのインスタンス化
const prisma = new client_1.PrismaClient();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            dotenv_1.default.config();
            const app = (0, express_1.default)();
            const __filename = (0, url_1.fileURLToPath)(import.meta.url);
            const __dirname = path_1.default.dirname(__filename);
            // ミドルウェアの設定
            app.use((0, cors_1.default)({
                origin: 'http://localhost:3000',
                credentials: true
            }));
            app.use((0, cookie_parser_1.default)());
            app.use(express_1.default.json());
            app.use(express_1.default.urlencoded({ extended: false }));
            // GraphQLスキーマの構築
            const schema = yield (0, type_graphql_1.buildSchema)({
                resolvers: [User_resolver_js_1.UserResolver, Todo_resolver_js_1.TodoResolver],
                validate: false,
            });
            // ApolloServerの設定
            const server = new server_1.ApolloServer({
                schema,
                formatError: (error) => {
                    console.error(error);
                    return error;
                },
            });
            // ApolloServerの起動
            yield server.start();
            // GraphQLエンドポイントの設定
            app.use('/graphql', (0, express4_1.expressMiddleware)(server, {
                context: (_a) => __awaiter(this, [_a], void 0, function* ({ req, res }) {
                    return ({
                        prisma,
                        req: req,
                        res,
                    });
                }),
            }));
            app.listen(() => {
                console.log('Server running at http://localhost:4001/graphql');
            });
            // 静的ファイルとビューの設定
            app.set('view engine', 'ejs');
            app.set('views', path_1.default.join(__dirname, 'views'));
            app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
            // RESTエンドポイント（必要な場合）
            app.get('/', (req, res) => {
                res.render('index');
            });
            // テスト環境でのみテストルートを追加
            if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
                app.use('/test', test_1.default);
            }
            // サーバーの起動
            const PORT = process.env.PORT || 4001;
            app.listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`);
                console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
            });
        }
        catch (error) {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    });
}
// Prismaクライアントのクリーンアップ
process.on('beforeExit', () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
startServer().catch(console.error);
