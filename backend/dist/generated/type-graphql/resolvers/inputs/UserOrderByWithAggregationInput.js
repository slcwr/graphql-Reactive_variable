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
import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "_sum", void 0);
UserOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("UserOrderByWithAggregationInput", {})
], UserOrderByWithAggregationInput);
export { UserOrderByWithAggregationInput };
//# sourceMappingURL=UserOrderByWithAggregationInput.js.map