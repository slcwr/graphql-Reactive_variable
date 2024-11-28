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
exports.FindManyTodoArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TodoOrderByWithRelationInput_1 = require("../../../inputs/TodoOrderByWithRelationInput");
const TodoWhereInput_1 = require("../../../inputs/TodoWhereInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
const TodoScalarFieldEnum_1 = require("../../../../enums/TodoScalarFieldEnum");
let FindManyTodoArgs = (() => {
    let _classDecorators = [TypeGraphQL.ArgsType()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _where_decorators;
    let _where_initializers = [];
    let _where_extraInitializers = [];
    let _orderBy_decorators;
    let _orderBy_initializers = [];
    let _orderBy_extraInitializers = [];
    let _cursor_decorators;
    let _cursor_initializers = [];
    let _cursor_extraInitializers = [];
    let _take_decorators;
    let _take_initializers = [];
    let _take_extraInitializers = [];
    let _skip_decorators;
    let _skip_initializers = [];
    let _skip_extraInitializers = [];
    let _distinct_decorators;
    let _distinct_initializers = [];
    let _distinct_extraInitializers = [];
    var FindManyTodoArgs = _classThis = class {
        constructor() {
            this.where = __runInitializers(this, _where_initializers, void 0);
            this.orderBy = (__runInitializers(this, _where_extraInitializers), __runInitializers(this, _orderBy_initializers, void 0));
            this.cursor = (__runInitializers(this, _orderBy_extraInitializers), __runInitializers(this, _cursor_initializers, void 0));
            this.take = (__runInitializers(this, _cursor_extraInitializers), __runInitializers(this, _take_initializers, void 0));
            this.skip = (__runInitializers(this, _take_extraInitializers), __runInitializers(this, _skip_initializers, void 0));
            this.distinct = (__runInitializers(this, _skip_extraInitializers), __runInitializers(this, _distinct_initializers, void 0));
            __runInitializers(this, _distinct_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "FindManyTodoArgs");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _where_decorators = [TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
                nullable: true
            })];
        _orderBy_decorators = [TypeGraphQL.Field(_type => [TodoOrderByWithRelationInput_1.TodoOrderByWithRelationInput], {
                nullable: true
            })];
        _cursor_decorators = [TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
                nullable: true
            })];
        _take_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        _skip_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        _distinct_decorators = [TypeGraphQL.Field(_type => [TodoScalarFieldEnum_1.TodoScalarFieldEnum], {
                nullable: true
            })];
        __esDecorate(null, null, _where_decorators, { kind: "field", name: "where", static: false, private: false, access: { has: obj => "where" in obj, get: obj => obj.where, set: (obj, value) => { obj.where = value; } }, metadata: _metadata }, _where_initializers, _where_extraInitializers);
        __esDecorate(null, null, _orderBy_decorators, { kind: "field", name: "orderBy", static: false, private: false, access: { has: obj => "orderBy" in obj, get: obj => obj.orderBy, set: (obj, value) => { obj.orderBy = value; } }, metadata: _metadata }, _orderBy_initializers, _orderBy_extraInitializers);
        __esDecorate(null, null, _cursor_decorators, { kind: "field", name: "cursor", static: false, private: false, access: { has: obj => "cursor" in obj, get: obj => obj.cursor, set: (obj, value) => { obj.cursor = value; } }, metadata: _metadata }, _cursor_initializers, _cursor_extraInitializers);
        __esDecorate(null, null, _take_decorators, { kind: "field", name: "take", static: false, private: false, access: { has: obj => "take" in obj, get: obj => obj.take, set: (obj, value) => { obj.take = value; } }, metadata: _metadata }, _take_initializers, _take_extraInitializers);
        __esDecorate(null, null, _skip_decorators, { kind: "field", name: "skip", static: false, private: false, access: { has: obj => "skip" in obj, get: obj => obj.skip, set: (obj, value) => { obj.skip = value; } }, metadata: _metadata }, _skip_initializers, _skip_extraInitializers);
        __esDecorate(null, null, _distinct_decorators, { kind: "field", name: "distinct", static: false, private: false, access: { has: obj => "distinct" in obj, get: obj => obj.distinct, set: (obj, value) => { obj.distinct = value; } }, metadata: _metadata }, _distinct_initializers, _distinct_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FindManyTodoArgs = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FindManyTodoArgs = _classThis;
})();
exports.FindManyTodoArgs = FindManyTodoArgs;
