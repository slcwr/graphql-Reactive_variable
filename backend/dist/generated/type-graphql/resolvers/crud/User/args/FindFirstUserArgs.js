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
import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstUserArgs);
export { FindFirstUserArgs };
//# sourceMappingURL=FindFirstUserArgs.js.map