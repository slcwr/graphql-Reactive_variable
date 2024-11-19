var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as TypeGraphQL from "type-graphql";
import { TodoOrderByWithRelationInput } from "../../../inputs/TodoOrderByWithRelationInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";
import { TodoScalarFieldEnum } from "../../../../enums/TodoScalarFieldEnum";
let FindFirstTodoOrThrowArgs = class FindFirstTodoOrThrowArgs {
};
__decorate([
    TypeGraphQL.Field(_type => TodoWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstTodoOrThrowArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstTodoOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstTodoOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstTodoOrThrowArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstTodoOrThrowArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstTodoOrThrowArgs.prototype, "distinct", void 0);
FindFirstTodoOrThrowArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstTodoOrThrowArgs);
export { FindFirstTodoOrThrowArgs };
//# sourceMappingURL=FindFirstTodoOrThrowArgs.js.map