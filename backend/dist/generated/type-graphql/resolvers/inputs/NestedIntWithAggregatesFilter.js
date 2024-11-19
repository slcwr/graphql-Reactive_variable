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
import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
let NestedIntWithAggregatesFilter = class NestedIntWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], NestedIntWithAggregatesFilter.prototype, "_max", void 0);
NestedIntWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType("NestedIntWithAggregatesFilter", {})
], NestedIntWithAggregatesFilter);
export { NestedIntWithAggregatesFilter };
//# sourceMappingURL=NestedIntWithAggregatesFilter.js.map