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
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";
let TodoOrderByWithRelationInput = class TodoOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoOrderByWithRelationInput.prototype, "user", void 0);
TodoOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType("TodoOrderByWithRelationInput", {})
], TodoOrderByWithRelationInput);
export { TodoOrderByWithRelationInput };
//# sourceMappingURL=TodoOrderByWithRelationInput.js.map