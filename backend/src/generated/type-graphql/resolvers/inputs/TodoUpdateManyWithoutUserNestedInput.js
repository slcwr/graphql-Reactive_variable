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
exports.TodoUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TodoCreateManyUserInputEnvelope_1 = require("../inputs/TodoCreateManyUserInputEnvelope");
const TodoCreateOrConnectWithoutUserInput_1 = require("../inputs/TodoCreateOrConnectWithoutUserInput");
const TodoCreateWithoutUserInput_1 = require("../inputs/TodoCreateWithoutUserInput");
const TodoScalarWhereInput_1 = require("../inputs/TodoScalarWhereInput");
const TodoUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/TodoUpdateManyWithWhereWithoutUserInput");
const TodoUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/TodoUpdateWithWhereUniqueWithoutUserInput");
const TodoUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/TodoUpsertWithWhereUniqueWithoutUserInput");
const TodoWhereUniqueInput_1 = require("../inputs/TodoWhereUniqueInput");
let TodoUpdateManyWithoutUserNestedInput = (() => {
    let _classDecorators = [TypeGraphQL.InputType("TodoUpdateManyWithoutUserNestedInput", {})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _create_decorators;
    let _create_initializers = [];
    let _create_extraInitializers = [];
    let _connectOrCreate_decorators;
    let _connectOrCreate_initializers = [];
    let _connectOrCreate_extraInitializers = [];
    let _upsert_decorators;
    let _upsert_initializers = [];
    let _upsert_extraInitializers = [];
    let _createMany_decorators;
    let _createMany_initializers = [];
    let _createMany_extraInitializers = [];
    let _set_decorators;
    let _set_initializers = [];
    let _set_extraInitializers = [];
    let _disconnect_decorators;
    let _disconnect_initializers = [];
    let _disconnect_extraInitializers = [];
    let _delete_decorators;
    let _delete_initializers = [];
    let _delete_extraInitializers = [];
    let _connect_decorators;
    let _connect_initializers = [];
    let _connect_extraInitializers = [];
    let _update_decorators;
    let _update_initializers = [];
    let _update_extraInitializers = [];
    let _updateMany_decorators;
    let _updateMany_initializers = [];
    let _updateMany_extraInitializers = [];
    let _deleteMany_decorators;
    let _deleteMany_initializers = [];
    let _deleteMany_extraInitializers = [];
    var TodoUpdateManyWithoutUserNestedInput = _classThis = class {
        constructor() {
            this.create = __runInitializers(this, _create_initializers, void 0);
            this.connectOrCreate = (__runInitializers(this, _create_extraInitializers), __runInitializers(this, _connectOrCreate_initializers, void 0));
            this.upsert = (__runInitializers(this, _connectOrCreate_extraInitializers), __runInitializers(this, _upsert_initializers, void 0));
            this.createMany = (__runInitializers(this, _upsert_extraInitializers), __runInitializers(this, _createMany_initializers, void 0));
            this.set = (__runInitializers(this, _createMany_extraInitializers), __runInitializers(this, _set_initializers, void 0));
            this.disconnect = (__runInitializers(this, _set_extraInitializers), __runInitializers(this, _disconnect_initializers, void 0));
            this.delete = (__runInitializers(this, _disconnect_extraInitializers), __runInitializers(this, _delete_initializers, void 0));
            this.connect = (__runInitializers(this, _delete_extraInitializers), __runInitializers(this, _connect_initializers, void 0));
            this.update = (__runInitializers(this, _connect_extraInitializers), __runInitializers(this, _update_initializers, void 0));
            this.updateMany = (__runInitializers(this, _update_extraInitializers), __runInitializers(this, _updateMany_initializers, void 0));
            this.deleteMany = (__runInitializers(this, _updateMany_extraInitializers), __runInitializers(this, _deleteMany_initializers, void 0));
            __runInitializers(this, _deleteMany_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "TodoUpdateManyWithoutUserNestedInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [TypeGraphQL.Field(_type => [TodoCreateWithoutUserInput_1.TodoCreateWithoutUserInput], {
                nullable: true
            })];
        _connectOrCreate_decorators = [TypeGraphQL.Field(_type => [TodoCreateOrConnectWithoutUserInput_1.TodoCreateOrConnectWithoutUserInput], {
                nullable: true
            })];
        _upsert_decorators = [TypeGraphQL.Field(_type => [TodoUpsertWithWhereUniqueWithoutUserInput_1.TodoUpsertWithWhereUniqueWithoutUserInput], {
                nullable: true
            })];
        _createMany_decorators = [TypeGraphQL.Field(_type => TodoCreateManyUserInputEnvelope_1.TodoCreateManyUserInputEnvelope, {
                nullable: true
            })];
        _set_decorators = [TypeGraphQL.Field(_type => [TodoWhereUniqueInput_1.TodoWhereUniqueInput], {
                nullable: true
            })];
        _disconnect_decorators = [TypeGraphQL.Field(_type => [TodoWhereUniqueInput_1.TodoWhereUniqueInput], {
                nullable: true
            })];
        _delete_decorators = [TypeGraphQL.Field(_type => [TodoWhereUniqueInput_1.TodoWhereUniqueInput], {
                nullable: true
            })];
        _connect_decorators = [TypeGraphQL.Field(_type => [TodoWhereUniqueInput_1.TodoWhereUniqueInput], {
                nullable: true
            })];
        _update_decorators = [TypeGraphQL.Field(_type => [TodoUpdateWithWhereUniqueWithoutUserInput_1.TodoUpdateWithWhereUniqueWithoutUserInput], {
                nullable: true
            })];
        _updateMany_decorators = [TypeGraphQL.Field(_type => [TodoUpdateManyWithWhereWithoutUserInput_1.TodoUpdateManyWithWhereWithoutUserInput], {
                nullable: true
            })];
        _deleteMany_decorators = [TypeGraphQL.Field(_type => [TodoScalarWhereInput_1.TodoScalarWhereInput], {
                nullable: true
            })];
        __esDecorate(null, null, _create_decorators, { kind: "field", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create, set: (obj, value) => { obj.create = value; } }, metadata: _metadata }, _create_initializers, _create_extraInitializers);
        __esDecorate(null, null, _connectOrCreate_decorators, { kind: "field", name: "connectOrCreate", static: false, private: false, access: { has: obj => "connectOrCreate" in obj, get: obj => obj.connectOrCreate, set: (obj, value) => { obj.connectOrCreate = value; } }, metadata: _metadata }, _connectOrCreate_initializers, _connectOrCreate_extraInitializers);
        __esDecorate(null, null, _upsert_decorators, { kind: "field", name: "upsert", static: false, private: false, access: { has: obj => "upsert" in obj, get: obj => obj.upsert, set: (obj, value) => { obj.upsert = value; } }, metadata: _metadata }, _upsert_initializers, _upsert_extraInitializers);
        __esDecorate(null, null, _createMany_decorators, { kind: "field", name: "createMany", static: false, private: false, access: { has: obj => "createMany" in obj, get: obj => obj.createMany, set: (obj, value) => { obj.createMany = value; } }, metadata: _metadata }, _createMany_initializers, _createMany_extraInitializers);
        __esDecorate(null, null, _set_decorators, { kind: "field", name: "set", static: false, private: false, access: { has: obj => "set" in obj, get: obj => obj.set, set: (obj, value) => { obj.set = value; } }, metadata: _metadata }, _set_initializers, _set_extraInitializers);
        __esDecorate(null, null, _disconnect_decorators, { kind: "field", name: "disconnect", static: false, private: false, access: { has: obj => "disconnect" in obj, get: obj => obj.disconnect, set: (obj, value) => { obj.disconnect = value; } }, metadata: _metadata }, _disconnect_initializers, _disconnect_extraInitializers);
        __esDecorate(null, null, _delete_decorators, { kind: "field", name: "delete", static: false, private: false, access: { has: obj => "delete" in obj, get: obj => obj.delete, set: (obj, value) => { obj.delete = value; } }, metadata: _metadata }, _delete_initializers, _delete_extraInitializers);
        __esDecorate(null, null, _connect_decorators, { kind: "field", name: "connect", static: false, private: false, access: { has: obj => "connect" in obj, get: obj => obj.connect, set: (obj, value) => { obj.connect = value; } }, metadata: _metadata }, _connect_initializers, _connect_extraInitializers);
        __esDecorate(null, null, _update_decorators, { kind: "field", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update, set: (obj, value) => { obj.update = value; } }, metadata: _metadata }, _update_initializers, _update_extraInitializers);
        __esDecorate(null, null, _updateMany_decorators, { kind: "field", name: "updateMany", static: false, private: false, access: { has: obj => "updateMany" in obj, get: obj => obj.updateMany, set: (obj, value) => { obj.updateMany = value; } }, metadata: _metadata }, _updateMany_initializers, _updateMany_extraInitializers);
        __esDecorate(null, null, _deleteMany_decorators, { kind: "field", name: "deleteMany", static: false, private: false, access: { has: obj => "deleteMany" in obj, get: obj => obj.deleteMany, set: (obj, value) => { obj.deleteMany = value; } }, metadata: _metadata }, _deleteMany_initializers, _deleteMany_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TodoUpdateManyWithoutUserNestedInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TodoUpdateManyWithoutUserNestedInput = _classThis;
})();
exports.TodoUpdateManyWithoutUserNestedInput = TodoUpdateManyWithoutUserNestedInput;
