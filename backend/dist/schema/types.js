var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/schema/types.ts
import { ObjectType, Field, Int } from 'type-graphql';
let User = class User {
};
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Field(() => [Todo]),
    __metadata("design:type", Array)
], User.prototype, "todos", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    ObjectType()
], User);
export { User };
let Todo = class Todo {
};
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], Todo.prototype, "updatedAt", void 0);
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], Todo.prototype, "userId", void 0);
__decorate([
    Field(() => User),
    __metadata("design:type", User)
], Todo.prototype, "user", void 0);
Todo = __decorate([
    ObjectType()
], Todo);
export { Todo };
//# sourceMappingURL=types.js.map