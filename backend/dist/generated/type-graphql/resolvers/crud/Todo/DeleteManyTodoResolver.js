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
import { DeleteManyTodoArgs } from "./args/DeleteManyTodoArgs";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
let DeleteManyTodoResolver = class DeleteManyTodoResolver {
    async deleteManyTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.deleteMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyTodoArgs]),
    __metadata("design:returntype", Promise)
], DeleteManyTodoResolver.prototype, "deleteManyTodo", null);
DeleteManyTodoResolver = __decorate([
    TypeGraphQL.Resolver(_of => Todo)
], DeleteManyTodoResolver);
export { DeleteManyTodoResolver };
//# sourceMappingURL=DeleteManyTodoResolver.js.map