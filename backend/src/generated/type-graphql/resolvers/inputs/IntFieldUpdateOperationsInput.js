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
exports.IntFieldUpdateOperationsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
let IntFieldUpdateOperationsInput = (() => {
    let _classDecorators = [TypeGraphQL.InputType("IntFieldUpdateOperationsInput", {})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _set_decorators;
    let _set_initializers = [];
    let _set_extraInitializers = [];
    let _increment_decorators;
    let _increment_initializers = [];
    let _increment_extraInitializers = [];
    let _decrement_decorators;
    let _decrement_initializers = [];
    let _decrement_extraInitializers = [];
    let _multiply_decorators;
    let _multiply_initializers = [];
    let _multiply_extraInitializers = [];
    let _divide_decorators;
    let _divide_initializers = [];
    let _divide_extraInitializers = [];
    var IntFieldUpdateOperationsInput = _classThis = class {
        constructor() {
            this.set = __runInitializers(this, _set_initializers, void 0);
            this.increment = (__runInitializers(this, _set_extraInitializers), __runInitializers(this, _increment_initializers, void 0));
            this.decrement = (__runInitializers(this, _increment_extraInitializers), __runInitializers(this, _decrement_initializers, void 0));
            this.multiply = (__runInitializers(this, _decrement_extraInitializers), __runInitializers(this, _multiply_initializers, void 0));
            this.divide = (__runInitializers(this, _multiply_extraInitializers), __runInitializers(this, _divide_initializers, void 0));
            __runInitializers(this, _divide_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "IntFieldUpdateOperationsInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _set_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        _increment_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        _decrement_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        _multiply_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        _divide_decorators = [TypeGraphQL.Field(_type => TypeGraphQL.Int, {
                nullable: true
            })];
        __esDecorate(null, null, _set_decorators, { kind: "field", name: "set", static: false, private: false, access: { has: obj => "set" in obj, get: obj => obj.set, set: (obj, value) => { obj.set = value; } }, metadata: _metadata }, _set_initializers, _set_extraInitializers);
        __esDecorate(null, null, _increment_decorators, { kind: "field", name: "increment", static: false, private: false, access: { has: obj => "increment" in obj, get: obj => obj.increment, set: (obj, value) => { obj.increment = value; } }, metadata: _metadata }, _increment_initializers, _increment_extraInitializers);
        __esDecorate(null, null, _decrement_decorators, { kind: "field", name: "decrement", static: false, private: false, access: { has: obj => "decrement" in obj, get: obj => obj.decrement, set: (obj, value) => { obj.decrement = value; } }, metadata: _metadata }, _decrement_initializers, _decrement_extraInitializers);
        __esDecorate(null, null, _multiply_decorators, { kind: "field", name: "multiply", static: false, private: false, access: { has: obj => "multiply" in obj, get: obj => obj.multiply, set: (obj, value) => { obj.multiply = value; } }, metadata: _metadata }, _multiply_initializers, _multiply_extraInitializers);
        __esDecorate(null, null, _divide_decorators, { kind: "field", name: "divide", static: false, private: false, access: { has: obj => "divide" in obj, get: obj => obj.divide, set: (obj, value) => { obj.divide = value; } }, metadata: _metadata }, _divide_initializers, _divide_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IntFieldUpdateOperationsInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IntFieldUpdateOperationsInput = _classThis;
})();
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
