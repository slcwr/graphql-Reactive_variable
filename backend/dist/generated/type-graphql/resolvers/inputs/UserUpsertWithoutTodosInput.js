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
import { UserCreateWithoutTodosInput } from "../inputs/UserCreateWithoutTodosInput";
import { UserUpdateWithoutTodosInput } from "../inputs/UserUpdateWithoutTodosInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
let UserUpsertWithoutTodosInput = class UserUpsertWithoutTodosInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTodosInput, {
        nullable: false
    }),
    __metadata("design:type", UserUpdateWithoutTodosInput)
], UserUpsertWithoutTodosInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTodosInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateWithoutTodosInput)
], UserUpsertWithoutTodosInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpsertWithoutTodosInput.prototype, "where", void 0);
UserUpsertWithoutTodosInput = __decorate([
    TypeGraphQL.InputType("UserUpsertWithoutTodosInput", {})
], UserUpsertWithoutTodosInput);
export { UserUpsertWithoutTodosInput };
//# sourceMappingURL=UserUpsertWithoutTodosInput.js.map