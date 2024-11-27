var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// src/resolvers/User.resolver.ts
import { Resolver, Query, Mutation, Arg, Ctx, ObjectType, Field } from 'type-graphql';
import { User } from '../schema/Types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
let AuthPayload = class AuthPayload {
};
__decorate([
    Field(() => String),
    __metadata("design:type", String)
], AuthPayload.prototype, "token", void 0);
__decorate([
    Field(() => User),
    __metadata("design:type", User)
], AuthPayload.prototype, "user", void 0);
AuthPayload = __decorate([
    ObjectType()
], AuthPayload);
let UserResolver = class UserResolver {
    // AuthPayload型の定義
    async users({ prisma } // コンテキストからPrismaクライアントを取得
    ) {
        return prisma.user.findMany();
    }
    async createUser(username, password, { prisma } // コンテキストからPrismaクライアントを取得
    ) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });
    }
    async login(username, password, { prisma }) {
        const user = await prisma.user.findUnique({
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
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '24h' });
        return {
            token,
            user
        };
    }
};
__decorate([
    Query(() => [User]),
    __param(0, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    Mutation(() => User),
    __param(0, Arg('username', () => String)),
    __param(1, Arg('password', () => String)),
    __param(2, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    Mutation(() => AuthPayload),
    __param(0, Arg('username', () => String)),
    __param(1, Arg('password', () => String)),
    __param(2, Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    Resolver(of => User)
], UserResolver);
export { UserResolver };
//# sourceMappingURL=User.resolver.js.map