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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TodoAvgAggregate_1 = require("../outputs/TodoAvgAggregate");
const TodoCountAggregate_1 = require("../outputs/TodoCountAggregate");
const TodoMaxAggregate_1 = require("../outputs/TodoMaxAggregate");
const TodoMinAggregate_1 = require("../outputs/TodoMinAggregate");
const TodoSumAggregate_1 = require("../outputs/TodoSumAggregate");
let TodoGroupBy = (() => {
    let _classDecorators = [TypeGraphQL.ObjectType("TodoGroupBy", {})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    let _createdAt_extraInitializers = [];
    let _updatedAt_decorators;
    let _updatedAt_initializers = [];
    let _updatedAt_extraInitializers = [];
    let _userId_decorators;
    let _userId_initializers = [];
    let _userId_extraInitializers = [];
    let __count_decorators;
    let __count_initializers = [];
    let __count_extraInitializers = [];
    let __avg_decorators;
    let __avg_initializers = [];
    let __avg_extraInitializers = [];
    let __sum_decorators;
    let __sum_initializers = [];
    let __sum_extraInitializers = [];
    let __min_decorators;
    let __min_initializers = [];
    let __min_extraInitializers = [];
    let __max_decorators;
    let __max_initializers = [];
    let __max_extraInitializers = [];
    var TodoGroupBy = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.description = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.createdAt = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            this.userId = (__runInitializers(this, _updatedAt_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
            this._count = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, __count_initializers, void 0));
            this._avg = (__runInitializers(this, __count_extraInitializers), __runInitializers(this, __avg_initializers, void 0));
            this._sum = (__runInitializers(this, __avg_extraInitializers), __runInitializers(this, __sum_initializers, void 0));
            this._min = (__runInitializers(this, __sum_extraInitializers), __runInitializers(this, __min_initializers, void 0));
            this._max = (__runInitializers(this, __min_extraInitializers), __runInitializers(this, __max_initializers, void 0));
            __runInitializers(this, __max_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "TodoGroupBy");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: false
            })];
        _description_decorators = [TypeGraphQL.Field(_type => String, {
                nullable: false
            })];
        _createdAt_decorators = [TypeGraphQL.Field(_type => Date, {
                nullable: false
            })];
        _updatedAt_decorators = [TypeGraphQL.Field(_type => Date, {
                nullable: false
            })];
        _userId_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: false
            })];
        __count_decorators = [TypeGraphQL.Field(_type => TodoCountAggregate_1.TodoCountAggregate, {
                nullable: true
            })];
        __avg_decorators = [TypeGraphQL.Field(_type => TodoAvgAggregate_1.TodoAvgAggregate, {
                nullable: true
            })];
        __sum_decorators = [TypeGraphQL.Field(_type => TodoSumAggregate_1.TodoSumAggregate, {
                nullable: true
            })];
        __min_decorators = [TypeGraphQL.Field(_type => TodoMinAggregate_1.TodoMinAggregate, {
                nullable: true
            })];
        __max_decorators = [TypeGraphQL.Field(_type => TodoMaxAggregate_1.TodoMaxAggregate, {
                nullable: true
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: obj => "updatedAt" in obj, get: obj => obj.updatedAt, set: (obj, value) => { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: obj => "userId" in obj, get: obj => obj.userId, set: (obj, value) => { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, __count_decorators, { kind: "field", name: "_count", static: false, private: false, access: { has: obj => "_count" in obj, get: obj => obj._count, set: (obj, value) => { obj._count = value; } }, metadata: _metadata }, __count_initializers, __count_extraInitializers);
        __esDecorate(null, null, __avg_decorators, { kind: "field", name: "_avg", static: false, private: false, access: { has: obj => "_avg" in obj, get: obj => obj._avg, set: (obj, value) => { obj._avg = value; } }, metadata: _metadata }, __avg_initializers, __avg_extraInitializers);
        __esDecorate(null, null, __sum_decorators, { kind: "field", name: "_sum", static: false, private: false, access: { has: obj => "_sum" in obj, get: obj => obj._sum, set: (obj, value) => { obj._sum = value; } }, metadata: _metadata }, __sum_initializers, __sum_extraInitializers);
        __esDecorate(null, null, __min_decorators, { kind: "field", name: "_min", static: false, private: false, access: { has: obj => "_min" in obj, get: obj => obj._min, set: (obj, value) => { obj._min = value; } }, metadata: _metadata }, __min_initializers, __min_extraInitializers);
        __esDecorate(null, null, __max_decorators, { kind: "field", name: "_max", static: false, private: false, access: { has: obj => "_max" in obj, get: obj => obj._max, set: (obj, value) => { obj._max = value; } }, metadata: _metadata }, __max_initializers, __max_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TodoGroupBy = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TodoGroupBy = _classThis;
})();
exports.TodoGroupBy = TodoGroupBy;