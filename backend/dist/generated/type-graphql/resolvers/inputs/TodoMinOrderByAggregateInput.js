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
import { SortOrder } from "../../enums/SortOrder";
let TodoMinOrderByAggregateInput = class TodoMinOrderByAggregateInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoMinOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoMinOrderByAggregateInput.prototype, "userId", void 0);
TodoMinOrderByAggregateInput = __decorate([
    TypeGraphQL.InputType("TodoMinOrderByAggregateInput", {})
], TodoMinOrderByAggregateInput);
export { TodoMinOrderByAggregateInput };
//# sourceMappingURL=TodoMinOrderByAggregateInput.js.map