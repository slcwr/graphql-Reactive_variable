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
import { TodoAvgOrderByAggregateInput } from "../inputs/TodoAvgOrderByAggregateInput";
import { TodoCountOrderByAggregateInput } from "../inputs/TodoCountOrderByAggregateInput";
import { TodoMaxOrderByAggregateInput } from "../inputs/TodoMaxOrderByAggregateInput";
import { TodoMinOrderByAggregateInput } from "../inputs/TodoMinOrderByAggregateInput";
import { TodoSumOrderByAggregateInput } from "../inputs/TodoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";
let TodoOrderByWithAggregationInput = class TodoOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithAggregationInput.prototype, "_sum", void 0);
TodoOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("TodoOrderByWithAggregationInput", {})
], TodoOrderByWithAggregationInput);
export { TodoOrderByWithAggregationInput };
//# sourceMappingURL=TodoOrderByWithAggregationInput.js.map