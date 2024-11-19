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
import { TodoWhereInput } from "../inputs/TodoWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
let TodoWhereUniqueInput = class TodoWhereUniqueInput {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoWhereUniqueInput.prototype, "user", void 0);
TodoWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("TodoWhereUniqueInput", {})
], TodoWhereUniqueInput);
export { TodoWhereUniqueInput };
//# sourceMappingURL=TodoWhereUniqueInput.js.map