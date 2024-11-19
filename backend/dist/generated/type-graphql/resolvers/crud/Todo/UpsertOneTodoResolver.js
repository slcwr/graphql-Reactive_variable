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
import { UpsertOneTodoArgs } from "./args/UpsertOneTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
let UpsertOneTodoResolver = class UpsertOneTodoResolver {
    async upsertOneTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.upsert({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => Todo, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneTodoArgs]),
    __metadata("design:returntype", Promise)
], UpsertOneTodoResolver.prototype, "upsertOneTodo", null);
UpsertOneTodoResolver = __decorate([
    TypeGraphQL.Resolver(_of => Todo)
], UpsertOneTodoResolver);
export { UpsertOneTodoResolver };
//# sourceMappingURL=UpsertOneTodoResolver.js.map