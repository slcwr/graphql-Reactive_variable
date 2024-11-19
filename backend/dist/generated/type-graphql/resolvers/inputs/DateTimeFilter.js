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
let DateTimeFilter = class DateTimeFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = __decorate([
    TypeGraphQL.InputType("DateTimeFilter", {})
], DateTimeFilter);
export { DateTimeFilter };
//# sourceMappingURL=DateTimeFilter.js.map