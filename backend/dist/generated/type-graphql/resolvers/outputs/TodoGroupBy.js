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
import { TodoAvgAggregate } from "../outputs/TodoAvgAggregate";
import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";
import { TodoSumAggregate } from "../outputs/TodoSumAggregate";
let TodoGroupBy = class TodoGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], TodoGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], TodoGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], TodoGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], TodoGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], TodoGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TodoGroupBy.prototype, "_max", void 0);
TodoGroupBy = __decorate([
    TypeGraphQL.ObjectType("TodoGroupBy", {})
], TodoGroupBy);
export { TodoGroupBy };
//# sourceMappingURL=TodoGroupBy.js.map