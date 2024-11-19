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
import { TodoOrderByWithAggregationInput } from "../../../inputs/TodoOrderByWithAggregationInput";
import { TodoScalarWhereWithAggregatesInput } from "../../../inputs/TodoScalarWhereWithAggregatesInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoScalarFieldEnum } from "../../../../enums/TodoScalarFieldEnum";
let GroupByTodoArgs = class GroupByTodoArgs {
};
__decorate([
    TypeGraphQL.Field(_type => TodoWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTodoArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTodoArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByTodoArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTodoArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTodoArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTodoArgs.prototype, "skip", void 0);
GroupByTodoArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByTodoArgs);
export { GroupByTodoArgs };
//# sourceMappingURL=GroupByTodoArgs.js.map