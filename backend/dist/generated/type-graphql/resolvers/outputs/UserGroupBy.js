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
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
let UserGroupBy = class UserGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    TypeGraphQL.ObjectType("UserGroupBy", {})
], UserGroupBy);
export { UserGroupBy };
//# sourceMappingURL=UserGroupBy.js.map