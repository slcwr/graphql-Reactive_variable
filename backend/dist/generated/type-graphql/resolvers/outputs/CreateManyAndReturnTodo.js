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
import { User } from "../../models/User";
let CreateManyAndReturnTodo = class CreateManyAndReturnTodo {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnTodo.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnTodo.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnTodo.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnTodo.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnTodo.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => User, {
        nullable: false
    }),
    __metadata("design:type", User)
], CreateManyAndReturnTodo.prototype, "user", void 0);
CreateManyAndReturnTodo = __decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTodo", {})
], CreateManyAndReturnTodo);
export { CreateManyAndReturnTodo };
//# sourceMappingURL=CreateManyAndReturnTodo.js.map