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
// src/resolvers/user.resolver.ts
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { User } from '../schema/types';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
let UserResolver = class UserResolver {
    async users() {
        return prisma.user.findMany({
            include: {
                todos: true,
            },
        });
    }
    async createUser(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
            include: {
                todos: true,
            },
        });
    }
};
__decorate([
    Query(() => [User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    Mutation(() => User),
    __param(0, Arg('username')),
    __param(1, Arg('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    Resolver(User)
], UserResolver);
export { UserResolver };
//# sourceMappingURL=User.resolver.js.map