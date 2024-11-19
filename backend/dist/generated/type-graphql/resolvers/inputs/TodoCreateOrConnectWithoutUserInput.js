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
import { TodoCreateWithoutUserInput } from "../inputs/TodoCreateWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";
let TodoCreateOrConnectWithoutUserInput = class TodoCreateOrConnectWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", TodoWhereUniqueInput)
], TodoCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoCreateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", TodoCreateWithoutUserInput)
], TodoCreateOrConnectWithoutUserInput.prototype, "create", void 0);
TodoCreateOrConnectWithoutUserInput = __decorate([
    TypeGraphQL.InputType("TodoCreateOrConnectWithoutUserInput", {})
], TodoCreateOrConnectWithoutUserInput);
export { TodoCreateOrConnectWithoutUserInput };
//# sourceMappingURL=TodoCreateOrConnectWithoutUserInput.js.map