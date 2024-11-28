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
exports.TodoListRelationFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TodoWhereInput_1 = require("../inputs/TodoWhereInput");
let TodoListRelationFilter = (() => {
    let _classDecorators = [TypeGraphQL.InputType("TodoListRelationFilter", {})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _every_decorators;
    let _every_initializers = [];
    let _every_extraInitializers = [];
    let _some_decorators;
    let _some_initializers = [];
    let _some_extraInitializers = [];
    let _none_decorators;
    let _none_initializers = [];
    let _none_extraInitializers = [];
    var TodoListRelationFilter = _classThis = class {
        constructor() {
            this.every = __runInitializers(this, _every_initializers, void 0);
            this.some = (__runInitializers(this, _every_extraInitializers), __runInitializers(this, _some_initializers, void 0));
            this.none = (__runInitializers(this, _some_extraInitializers), __runInitializers(this, _none_initializers, void 0));
            __runInitializers(this, _none_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "TodoListRelationFilter");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _every_decorators = [TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
                nullable: true
            })];
        _some_decorators = [TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
                nullable: true
            })];
        _none_decorators = [TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
                nullable: true
            })];
        __esDecorate(null, null, _every_decorators, { kind: "field", name: "every", static: false, private: false, access: { has: obj => "every" in obj, get: obj => obj.every, set: (obj, value) => { obj.every = value; } }, metadata: _metadata }, _every_initializers, _every_extraInitializers);
        __esDecorate(null, null, _some_decorators, { kind: "field", name: "some", static: false, private: false, access: { has: obj => "some" in obj, get: obj => obj.some, set: (obj, value) => { obj.some = value; } }, metadata: _metadata }, _some_initializers, _some_extraInitializers);
        __esDecorate(null, null, _none_decorators, { kind: "field", name: "none", static: false, private: false, access: { has: obj => "none" in obj, get: obj => obj.none, set: (obj, value) => { obj.none = value; } }, metadata: _metadata }, _none_initializers, _none_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TodoListRelationFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TodoListRelationFilter = _classThis;
})();
exports.TodoListRelationFilter = TodoListRelationFilter;
