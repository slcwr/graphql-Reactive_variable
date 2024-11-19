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
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedStringWithAggregatesFilter } from "../inputs/NestedStringWithAggregatesFilter";
import { QueryMode } from "../../enums/QueryMode";
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => QueryMode, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType("StringWithAggregatesFilter", {})
], StringWithAggregatesFilter);
export { StringWithAggregatesFilter };
//# sourceMappingURL=StringWithAggregatesFilter.js.map