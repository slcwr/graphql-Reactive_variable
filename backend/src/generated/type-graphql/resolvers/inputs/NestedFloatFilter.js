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
exports.NestedFloatFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
let NestedFloatFilter = (() => {
    let _classDecorators = [TypeGraphQL.InputType("NestedFloatFilter", {})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _equals_decorators;
    let _equals_initializers = [];
    let _equals_extraInitializers = [];
    let _in_decorators;
    let _in_initializers = [];
    let _in_extraInitializers = [];
    let _notIn_decorators;
    let _notIn_initializers = [];
    let _notIn_extraInitializers = [];
    let _lt_decorators;
    let _lt_initializers = [];
    let _lt_extraInitializers = [];
    let _lte_decorators;
    let _lte_initializers = [];
    let _lte_extraInitializers = [];
    let _gt_decorators;
    let _gt_initializers = [];
    let _gt_extraInitializers = [];
    let _gte_decorators;
    let _gte_initializers = [];
    let _gte_extraInitializers = [];
    let _not_decorators;
    let _not_initializers = [];
    let _not_extraInitializers = [];
    var NestedFloatFilter = _classThis = class {
        constructor() {
            this.equals = __runInitializers(this, _equals_initializers, void 0);
            this.in = (__runInitializers(this, _equals_extraInitializers), __runInitializers(this, _in_initializers, void 0));
            this.notIn = (__runInitializers(this, _in_extraInitializers), __runInitializers(this, _notIn_initializers, void 0));
            this.lt = (__runInitializers(this, _notIn_extraInitializers), __runInitializers(this, _lt_initializers, void 0));
            this.lte = (__runInitializers(this, _lt_extraInitializers), __runInitializers(this, _lte_initializers, void 0));
            this.gt = (__runInitializers(this, _lte_extraInitializers), __runInitializers(this, _gt_initializers, void 0));
            this.gte = (__runInitializers(this, _gt_extraInitializers), __runInitializers(this, _gte_initializers, void 0));
            this.not = (__runInitializers(this, _gte_extraInitializers), __runInitializers(this, _not_initializers, void 0));
            __runInitializers(this, _not_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "NestedFloatFilter");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _equals_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Float, {
                nullable: true
            })];
        _in_decorators = [TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
                nullable: true
            })];
        _notIn_decorators = [TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
                nullable: true
            })];
        _lt_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Float, {
                nullable: true
            })];
        _lte_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Float, {
                nullable: true
            })];
        _gt_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Float, {
                nullable: true
            })];
        _gte_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Float, {
                nullable: true
            })];
        _not_decorators = [TypeGraphQL.Field(_type => NestedFloatFilter, {
                nullable: true
            })];
        __esDecorate(null, null, _equals_decorators, { kind: "field", name: "equals", static: false, private: false, access: { has: obj => "equals" in obj, get: obj => obj.equals, set: (obj, value) => { obj.equals = value; } }, metadata: _metadata }, _equals_initializers, _equals_extraInitializers);
        __esDecorate(null, null, _in_decorators, { kind: "field", name: "in", static: false, private: false, access: { has: obj => "in" in obj, get: obj => obj.in, set: (obj, value) => { obj.in = value; } }, metadata: _metadata }, _in_initializers, _in_extraInitializers);
        __esDecorate(null, null, _notIn_decorators, { kind: "field", name: "notIn", static: false, private: false, access: { has: obj => "notIn" in obj, get: obj => obj.notIn, set: (obj, value) => { obj.notIn = value; } }, metadata: _metadata }, _notIn_initializers, _notIn_extraInitializers);
        __esDecorate(null, null, _lt_decorators, { kind: "field", name: "lt", static: false, private: false, access: { has: obj => "lt" in obj, get: obj => obj.lt, set: (obj, value) => { obj.lt = value; } }, metadata: _metadata }, _lt_initializers, _lt_extraInitializers);
        __esDecorate(null, null, _lte_decorators, { kind: "field", name: "lte", static: false, private: false, access: { has: obj => "lte" in obj, get: obj => obj.lte, set: (obj, value) => { obj.lte = value; } }, metadata: _metadata }, _lte_initializers, _lte_extraInitializers);
        __esDecorate(null, null, _gt_decorators, { kind: "field", name: "gt", static: false, private: false, access: { has: obj => "gt" in obj, get: obj => obj.gt, set: (obj, value) => { obj.gt = value; } }, metadata: _metadata }, _gt_initializers, _gt_extraInitializers);
        __esDecorate(null, null, _gte_decorators, { kind: "field", name: "gte", static: false, private: false, access: { has: obj => "gte" in obj, get: obj => obj.gte, set: (obj, value) => { obj.gte = value; } }, metadata: _metadata }, _gte_initializers, _gte_extraInitializers);
        __esDecorate(null, null, _not_decorators, { kind: "field", name: "not", static: false, private: false, access: { has: obj => "not" in obj, get: obj => obj.not, set: (obj, value) => { obj.not = value; } }, metadata: _metadata }, _not_initializers, _not_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NestedFloatFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NestedFloatFilter = _classThis;
})();
exports.NestedFloatFilter = NestedFloatFilter;
