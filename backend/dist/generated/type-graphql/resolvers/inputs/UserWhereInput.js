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
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TodoListRelationFilter } from "../inputs/TodoListRelationFilter";
let UserWhereInput = class UserWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereInput.prototype, "todos", void 0);
UserWhereInput = __decorate([
    TypeGraphQL.InputType("UserWhereInput", {})
], UserWhereInput);
export { UserWhereInput };
//# sourceMappingURL=UserWhereInput.js.map