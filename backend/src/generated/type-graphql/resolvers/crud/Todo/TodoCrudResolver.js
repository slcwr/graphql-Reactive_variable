"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.TodoCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const helpers_1 = require("../../../helpers");
const Todo_1 = require("../../../models/Todo");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTodo_1 = require("../../outputs/AggregateTodo");
const CreateManyAndReturnTodo_1 = require("../../outputs/CreateManyAndReturnTodo");
const TodoGroupBy_1 = require("../../outputs/TodoGroupBy");
let TodoCrudResolver = (() => {
    let _classDecorators = [TypeGraphQL.Resolver(_of => Todo_1.Todo)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _aggregateTodo_decorators;
    let _createManyTodo_decorators;
    let _createManyAndReturnTodo_decorators;
    let _createOneTodo_decorators;
    let _deleteManyTodo_decorators;
    let _deleteOneTodo_decorators;
    let _findFirstTodo_decorators;
    let _findFirstTodoOrThrow_decorators;
    let _todos_decorators;
    let _todo_decorators;
    let _getTodo_decorators;
    let _groupByTodo_decorators;
    let _updateManyTodo_decorators;
    let _updateOneTodo_decorators;
    let _upsertOneTodo_decorators;
    var TodoCrudResolver = _classThis = class {
        aggregateTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
            });
        }
        createManyTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        createManyAndReturnTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.createManyAndReturn(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        createOneTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        deleteManyTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        deleteOneTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        findFirstTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        findFirstTodoOrThrow(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        todos(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        todo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        getTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        groupByTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
            });
        }
        updateManyTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        updateOneTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        upsertOneTodo(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).todo.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "TodoCrudResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _aggregateTodo_decorators = [TypeGraphQL.Query(_returns => AggregateTodo_1.AggregateTodo, {
                nullable: false
            })];
        _createManyTodo_decorators = [TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
                nullable: false
            })];
        _createManyAndReturnTodo_decorators = [TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTodo_1.CreateManyAndReturnTodo], {
                nullable: false
            })];
        _createOneTodo_decorators = [TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
                nullable: false
            })];
        _deleteManyTodo_decorators = [TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
                nullable: false
            })];
        _deleteOneTodo_decorators = [TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
                nullable: true
            })];
        _findFirstTodo_decorators = [TypeGraphQL.Query(_returns => Todo_1.Todo, {
                nullable: true
            })];
        _findFirstTodoOrThrow_decorators = [TypeGraphQL.Query(_returns => Todo_1.Todo, {
                nullable: true
            })];
        _todos_decorators = [TypeGraphQL.Query(_returns => [Todo_1.Todo], {
                nullable: false
            })];
        _todo_decorators = [TypeGraphQL.Query(_returns => Todo_1.Todo, {
                nullable: true
            })];
        _getTodo_decorators = [TypeGraphQL.Query(_returns => Todo_1.Todo, {
                nullable: true
            })];
        _groupByTodo_decorators = [TypeGraphQL.Query(_returns => [TodoGroupBy_1.TodoGroupBy], {
                nullable: false
            })];
        _updateManyTodo_decorators = [TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
                nullable: false
            })];
        _updateOneTodo_decorators = [TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
                nullable: true
            })];
        _upsertOneTodo_decorators = [TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
                nullable: false
            })];
        __esDecorate(_classThis, null, _aggregateTodo_decorators, { kind: "method", name: "aggregateTodo", static: false, private: false, access: { has: obj => "aggregateTodo" in obj, get: obj => obj.aggregateTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createManyTodo_decorators, { kind: "method", name: "createManyTodo", static: false, private: false, access: { has: obj => "createManyTodo" in obj, get: obj => obj.createManyTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createManyAndReturnTodo_decorators, { kind: "method", name: "createManyAndReturnTodo", static: false, private: false, access: { has: obj => "createManyAndReturnTodo" in obj, get: obj => obj.createManyAndReturnTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createOneTodo_decorators, { kind: "method", name: "createOneTodo", static: false, private: false, access: { has: obj => "createOneTodo" in obj, get: obj => obj.createOneTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteManyTodo_decorators, { kind: "method", name: "deleteManyTodo", static: false, private: false, access: { has: obj => "deleteManyTodo" in obj, get: obj => obj.deleteManyTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteOneTodo_decorators, { kind: "method", name: "deleteOneTodo", static: false, private: false, access: { has: obj => "deleteOneTodo" in obj, get: obj => obj.deleteOneTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findFirstTodo_decorators, { kind: "method", name: "findFirstTodo", static: false, private: false, access: { has: obj => "findFirstTodo" in obj, get: obj => obj.findFirstTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findFirstTodoOrThrow_decorators, { kind: "method", name: "findFirstTodoOrThrow", static: false, private: false, access: { has: obj => "findFirstTodoOrThrow" in obj, get: obj => obj.findFirstTodoOrThrow }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _todos_decorators, { kind: "method", name: "todos", static: false, private: false, access: { has: obj => "todos" in obj, get: obj => obj.todos }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _todo_decorators, { kind: "method", name: "todo", static: false, private: false, access: { has: obj => "todo" in obj, get: obj => obj.todo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getTodo_decorators, { kind: "method", name: "getTodo", static: false, private: false, access: { has: obj => "getTodo" in obj, get: obj => obj.getTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _groupByTodo_decorators, { kind: "method", name: "groupByTodo", static: false, private: false, access: { has: obj => "groupByTodo" in obj, get: obj => obj.groupByTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateManyTodo_decorators, { kind: "method", name: "updateManyTodo", static: false, private: false, access: { has: obj => "updateManyTodo" in obj, get: obj => obj.updateManyTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateOneTodo_decorators, { kind: "method", name: "updateOneTodo", static: false, private: false, access: { has: obj => "updateOneTodo" in obj, get: obj => obj.updateOneTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _upsertOneTodo_decorators, { kind: "method", name: "upsertOneTodo", static: false, private: false, access: { has: obj => "upsertOneTodo" in obj, get: obj => obj.upsertOneTodo }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TodoCrudResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TodoCrudResolver = _classThis;
})();
exports.TodoCrudResolver = TodoCrudResolver;
