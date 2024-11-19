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
import { AggregateTodoArgs } from "./args/AggregateTodoArgs";
import { CreateManyAndReturnTodoArgs } from "./args/CreateManyAndReturnTodoArgs";
import { CreateManyTodoArgs } from "./args/CreateManyTodoArgs";
import { CreateOneTodoArgs } from "./args/CreateOneTodoArgs";
import { DeleteManyTodoArgs } from "./args/DeleteManyTodoArgs";
import { DeleteOneTodoArgs } from "./args/DeleteOneTodoArgs";
import { FindFirstTodoArgs } from "./args/FindFirstTodoArgs";
import { FindFirstTodoOrThrowArgs } from "./args/FindFirstTodoOrThrowArgs";
import { FindManyTodoArgs } from "./args/FindManyTodoArgs";
import { FindUniqueTodoArgs } from "./args/FindUniqueTodoArgs";
import { FindUniqueTodoOrThrowArgs } from "./args/FindUniqueTodoOrThrowArgs";
import { GroupByTodoArgs } from "./args/GroupByTodoArgs";
import { UpdateManyTodoArgs } from "./args/UpdateManyTodoArgs";
import { UpdateOneTodoArgs } from "./args/UpdateOneTodoArgs";
import { UpsertOneTodoArgs } from "./args/UpsertOneTodoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTodo } from "../../outputs/AggregateTodo";
import { CreateManyAndReturnTodo } from "../../outputs/CreateManyAndReturnTodo";
import { TodoGroupBy } from "../../outputs/TodoGroupBy";
let TodoCrudResolver = class TodoCrudResolver {
    async aggregateTodo(ctx, info, args) {
        return getPrismaFromContext(ctx).todo.aggregate({
            ...args,
            ...transformInfoIntoPrismaArgs(info),
        });
    }
    async createManyTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.createMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyAndReturnTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.createManyAndReturn({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOneTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.create({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.deleteMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOneTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.delete({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.findFirst({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstTodoOrThrow(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.findFirstOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async todos(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.findMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async todo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.findUnique({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async getTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.findUniqueOrThrow({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async groupByTodo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.updateMany({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOneTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.update({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOneTodo(ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.upsert({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateTodo, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "aggregateTodo", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "createManyTodo", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTodo], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "createManyAndReturnTodo", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Todo, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "createOneTodo", null);
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
], TodoCrudResolver.prototype, "deleteManyTodo", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Todo, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "deleteOneTodo", null);
__decorate([
    TypeGraphQL.Query(_returns => Todo, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "findFirstTodo", null);
__decorate([
    TypeGraphQL.Query(_returns => Todo, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTodoOrThrowArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "findFirstTodoOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Todo], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "todos", null);
__decorate([
    TypeGraphQL.Query(_returns => Todo, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "todo", null);
__decorate([
    TypeGraphQL.Query(_returns => Todo, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTodoOrThrowArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "getTodo", null);
__decorate([
    TypeGraphQL.Query(_returns => [TodoGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "groupByTodo", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "updateManyTodo", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Todo, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneTodoArgs]),
    __metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "updateOneTodo", null);
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
], TodoCrudResolver.prototype, "upsertOneTodo", null);
TodoCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Todo)
], TodoCrudResolver);
export { TodoCrudResolver };
//# sourceMappingURL=TodoCrudResolver.js.map