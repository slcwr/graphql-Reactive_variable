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
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { QueryMode } from "../../enums/QueryMode";
let StringFilter = class StringFilter {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "contains", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => QueryMode, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "mode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    TypeGraphQL.InputType("StringFilter", {})
], StringFilter);
export { StringFilter };
//# sourceMappingURL=StringFilter.js.map