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
import * as TypeGraphQL from "type-graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyAndReturnUserArgs } from "./args/CreateManyAndReturnUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { CreateManyAndReturnUser } from "../../outputs/CreateManyAndReturnUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";
let UserCrudResolver = class UserCrudResolver {
    async aggregateUser(ctx, info, args) {
        return getPrismaFromContext(ctx).user.aggregate({
            ...args,
            ...transformInfoIntoPrismaArgs(info),
        });
    }
    async createManyUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.createMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyAndReturnUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.createManyAndReturn({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOneUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.create({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.deleteMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOneUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.delete({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.findFirst({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstUserOrThrow(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.findFirstOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async users(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.findMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async user(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.findUnique({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async getUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.findUniqueOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async groupByUser(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.updateMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOneUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.update({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOneUser(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.upsert({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateUser, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "aggregateUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUser], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createManyAndReturnUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "createOneUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "deleteOneUser", null);
__decorate([
    TypeGraphQL.Query(_returns => User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUser", null);
__decorate([
    TypeGraphQL.Query(_returns => User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserOrThrowArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "findFirstUserOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [User], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "users", null);
__decorate([
    TypeGraphQL.Query(_returns => User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.Query(_returns => User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserOrThrowArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "getUser", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "groupByUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateManyUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "updateOneUser", null);
__decorate([
    TypeGraphQL.Mutation(_returns => User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserCrudResolver.prototype, "upsertOneUser", null);
UserCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => User)
], UserCrudResolver);
export { UserCrudResolver };
//# sourceMappingURL=UserCrudResolver.js.map