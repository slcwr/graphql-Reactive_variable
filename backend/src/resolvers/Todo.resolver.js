"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
// src/resolvers/todo.resolver.ts
const type_graphql_1 = require("type-graphql");
const Types_1 = require("../schema/Types");
let TodoResolver = (() => {
    let _classDecorators = [(0, type_graphql_1.Resolver)(() => Types_1.Todo)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _todos_decorators;
    let _todo_decorators;
    let _createTodo_decorators;
    var TodoResolver = _classThis = class {
        todos(_a) {
            return __awaiter(this, arguments, void 0, function* ({ prisma }) {
                const todos = yield prisma.todo.findMany({
                    include: {
                        user: true
                    }
                });
                // Prismaの結果をGraphQL型に合わせて変換
                return todos.map(todo => (Object.assign(Object.assign({}, todo), { user: Object.assign(Object.assign({}, todo.user), { todos: [] // 必要に応じて todos を取得
                     }) })));
            });
        }
        todo(id_1, _a) {
            return __awaiter(this, arguments, void 0, function* (id, { prisma }) {
                const todo = yield prisma.todo.findUnique({
                    where: { id },
                    include: {
                        user: true
                    }
                });
                if (!todo)
                    return null;
                return Object.assign(Object.assign({}, todo), { user: Object.assign(Object.assign({}, todo.user), { todos: [] // 必要に応じて todos を取得
                     }) });
            });
        }
        createTodo(description_1, userId_1, _a) {
            return __awaiter(this, arguments, void 0, function* (description, userId, { prisma }) {
                const todo = yield prisma.todo.create({
                    data: {
                        description,
                        userId,
                    },
                    include: {
                        user: true
                    }
                });
                return Object.assign(Object.assign({}, todo), { user: Object.assign(Object.assign({}, todo.user), { todos: [] // 必要に応じて todos を取得
                     }) });
            });
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "TodoResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _todos_decorators = [(0, type_graphql_1.Query)(() => [Types_1.Todo])];
        _todo_decorators = [(0, type_graphql_1.Query)(() => Types_1.Todo, { nullable: true })];
        _createTodo_decorators = [(0, type_graphql_1.Mutation)(() => Types_1.Todo)];
        __esDecorate(_classThis, null, _todos_decorators, { kind: "method", name: "todos", static: false, private: false, access: { has: obj => "todos" in obj, get: obj => obj.todos }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _todo_decorators, { kind: "method", name: "todo", static: false, private: false, access: { has: obj => "todo" in obj, get: obj => obj.todo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createTodo_decorators, { kind: "method", name: "createTodo", static: false, private: false, access: { has: obj => "createTodo" in obj, get: obj => obj.createTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TodoResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TodoResolver = _classThis;
})();
exports.TodoResolver = TodoResolver;
