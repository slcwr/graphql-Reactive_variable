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
import { TodoCreateManyUserInputEnvelope } from "../inputs/TodoCreateManyUserInputEnvelope";
import { TodoCreateOrConnectWithoutUserInput } from "../inputs/TodoCreateOrConnectWithoutUserInput";
import { TodoCreateWithoutUserInput } from "../inputs/TodoCreateWithoutUserInput";
import { TodoScalarWhereInput } from "../inputs/TodoScalarWhereInput";
import { TodoUpdateManyWithWhereWithoutUserInput } from "../inputs/TodoUpdateManyWithWhereWithoutUserInput";
import { TodoUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TodoUpdateWithWhereUniqueWithoutUserInput";
import { TodoUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TodoUpsertWithWhereUniqueWithoutUserInput";
import { TodoWhereUniqueInput } from "../inputs/TodoWhereUniqueInput";
let TodoUpdateManyWithoutUserNestedInput = class TodoUpdateManyWithoutUserNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TodoCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
TodoUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("TodoUpdateManyWithoutUserNestedInput", {})
], TodoUpdateManyWithoutUserNestedInput);
export { TodoUpdateManyWithoutUserNestedInput };
//# sourceMappingURL=TodoUpdateManyWithoutUserNestedInput.js.map