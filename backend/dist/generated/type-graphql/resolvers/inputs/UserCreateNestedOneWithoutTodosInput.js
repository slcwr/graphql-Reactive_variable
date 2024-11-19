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
import { UserCreateOrConnectWithoutTodosInput } from "../inputs/UserCreateOrConnectWithoutTodosInput";
import { UserCreateWithoutTodosInput } from "../inputs/UserCreateWithoutTodosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
let UserCreateNestedOneWithoutTodosInput = class UserCreateNestedOneWithoutTodosInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTodosInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateNestedOneWithoutTodosInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTodosInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateNestedOneWithoutTodosInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateNestedOneWithoutTodosInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutTodosInput = __decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutTodosInput", {})
], UserCreateNestedOneWithoutTodosInput);
export { UserCreateNestedOneWithoutTodosInput };
//# sourceMappingURL=UserCreateNestedOneWithoutTodosInput.js.map