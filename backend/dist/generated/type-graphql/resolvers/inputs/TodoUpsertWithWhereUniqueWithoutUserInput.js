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
import { TodoUpdateWithoutUserInput } from "../inputs/TodoUpdateWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";
let TodoUpsertWithWhereUniqueWithoutUserInput = class TodoUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", TodoWhereUniqueInput)
], TodoUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoUpdateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", TodoUpdateWithoutUserInput)
], TodoUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoCreateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", TodoCreateWithoutUserInput)
], TodoUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
TodoUpsertWithWhereUniqueWithoutUserInput = __decorate([
    TypeGraphQL.InputType("TodoUpsertWithWhereUniqueWithoutUserInput", {})
], TodoUpsertWithWhereUniqueWithoutUserInput);
export { TodoUpsertWithWhereUniqueWithoutUserInput };
//# sourceMappingURL=TodoUpsertWithWhereUniqueWithoutUserInput.js.map