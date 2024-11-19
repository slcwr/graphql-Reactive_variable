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
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
let TodoScalarWhereWithAggregatesInput = class TodoScalarWhereWithAggregatesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TodoScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TodoScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoScalarWhereWithAggregatesInput.prototype, "userId", void 0);
TodoScalarWhereWithAggregatesInput = __decorate([
    TypeGraphQL.InputType("TodoScalarWhereWithAggregatesInput", {})
], TodoScalarWhereWithAggregatesInput);
export { TodoScalarWhereWithAggregatesInput };
//# sourceMappingURL=TodoScalarWhereWithAggregatesInput.js.map