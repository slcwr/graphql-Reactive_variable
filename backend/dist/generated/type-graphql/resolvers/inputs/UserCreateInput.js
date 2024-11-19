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
import { TodoCreateNestedManyWithoutUserInput } from "../inputs/TodoCreateNestedManyWithoutUserInput";
let UserCreateInput = class UserCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateInput.prototype, "todos", void 0);
UserCreateInput = __decorate([
    TypeGraphQL.InputType("UserCreateInput", {})
], UserCreateInput);
export { UserCreateInput };
//# sourceMappingURL=UserCreateInput.js.map