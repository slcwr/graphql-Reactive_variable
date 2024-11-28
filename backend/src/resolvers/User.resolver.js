"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
// src/resolvers/User.resolver.ts
const type_graphql_1 = require("type-graphql");
const Types_1 = require("../schema/Types");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let AuthPayload = (() => {
    let _classDecorators = [(0, type_graphql_1.ObjectType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _token_decorators;
    let _token_initializers = [];
    let _token_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    var AuthPayload = _classThis = class {
        constructor() {
            this.token = __runInitializers(this, _token_initializers, void 0);
            this.user = (__runInitializers(this, _token_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            __runInitializers(this, _user_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AuthPayload");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _token_decorators = [(0, type_graphql_1.Field)(() => String)];
        _user_decorators = [(0, type_graphql_1.Field)(() => Types_1.User)];
        __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: obj => "token" in obj, get: obj => obj.token, set: (obj, value) => { obj.token = value; } }, metadata: _metadata }, _token_initializers, _token_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthPayload = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthPayload = _classThis;
})();
let UserResolver = (() => {
    let _classDecorators = [(0, type_graphql_1.Resolver)(() => Types_1.User)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _users_decorators;
    let _createUser_decorators;
    let _login_decorators;
    var UserResolver = _classThis = class {
        // AuthPayload型の定義
        users(_a) {
            return __awaiter(this, arguments, void 0, function* ({ prisma } // コンテキストからPrismaクライアントを取得
            ) {
                return prisma.user.findMany();
            });
        }
        createUser(username_1, password_1, _a) {
            return __awaiter(this, arguments, void 0, function* (username, password, { prisma } // コンテキストからPrismaクライアントを取得
            ) {
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                return prisma.user.create({
                    data: {
                        username,
                        password: hashedPassword
                    }
                });
            });
        }
        login(username_1, password_1, _a) {
            return __awaiter(this, arguments, void 0, function* (username, password, { prisma }) {
                const user = yield prisma.user.findUnique({
                    where: { username },
                    include: {
                        todos: {
                            include: {
                                user: true
                            }
                        }
                    } // 型アサーションを追加
                });
                if (!user) {
                    throw new Error('User not found');
                }
                const isValid = yield bcrypt_1.default.compare(password, user.password);
                if (!isValid) {
                    throw new Error('Invalid password');
                }
                const token = jsonwebtoken_1.default.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '24h' });
                return {
                    token,
                    user
                };
            });
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "UserResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _users_decorators = [(0, type_graphql_1.Query)(() => [Types_1.User])];
        _createUser_decorators = [(0, type_graphql_1.Mutation)(() => Types_1.User)];
        _login_decorators = [(0, type_graphql_1.Mutation)(() => AuthPayload)];
        __esDecorate(_classThis, null, _users_decorators, { kind: "method", name: "users", static: false, private: false, access: { has: obj => "users" in obj, get: obj => obj.users }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: obj => "createUser" in obj, get: obj => obj.createUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _login_decorators, { kind: "method", name: "login", static: false, private: false, access: { has: obj => "login" in obj, get: obj => obj.login }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserResolver = _classThis;
})();
exports.UserResolver = UserResolver;
