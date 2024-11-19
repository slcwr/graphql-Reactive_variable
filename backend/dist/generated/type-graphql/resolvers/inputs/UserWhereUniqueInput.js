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
import { StringFilter } from "../inputs/StringFilter";
import { TodoListRelationFilter } from "../inputs/TodoListRelationFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserWhereUniqueInput.prototype, "todos", void 0);
UserWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("UserWhereUniqueInput", {})
], UserWhereUniqueInput);
export { UserWhereUniqueInput };
//# sourceMappingURL=UserWhereUniqueInput.js.map