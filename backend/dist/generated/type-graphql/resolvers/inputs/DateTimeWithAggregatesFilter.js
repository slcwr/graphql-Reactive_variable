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
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedDateTimeWithAggregatesFilter } from "../inputs/NestedDateTimeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType("DateTimeWithAggregatesFilter", {})
], DateTimeWithAggregatesFilter);
export { DateTimeWithAggregatesFilter };
//# sourceMappingURL=DateTimeWithAggregatesFilter.js.map