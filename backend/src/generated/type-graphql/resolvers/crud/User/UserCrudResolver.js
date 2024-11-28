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
exports.UserCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const helpers_1 = require("../../../helpers");
const User_1 = require("../../../models/User");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const CreateManyAndReturnUser_1 = require("../../outputs/CreateManyAndReturnUser");
const UserGroupBy_1 = require("../../outputs/UserGroupBy");
let UserCrudResolver = (() => {
    let _classDecorators = [TypeGraphQL.Resolver(_of => User_1.User)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _aggregateUser_decorators;
    let _createManyUser_decorators;
    let _createManyAndReturnUser_decorators;
    let _createOneUser_decorators;
    let _deleteManyUser_decorators;
    let _deleteOneUser_decorators;
    let _findFirstUser_decorators;
    let _findFirstUserOrThrow_decorators;
    let _users_decorators;
    let _user_decorators;
    let _getUser_decorators;
    let _groupByUser_decorators;
    let _updateManyUser_decorators;
    let _updateOneUser_decorators;
    let _upsertOneUser_decorators;
    var UserCrudResolver = _classThis = class {
        aggregateUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, helpers_1.getPrismaFromContext)(ctx).user.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
            });
        }
        createManyUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        createManyAndReturnUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.createManyAndReturn(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        createOneUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        deleteManyUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        deleteOneUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        findFirstUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        findFirstUserOrThrow(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        users(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        user(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        getUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        groupByUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
            });
        }
        updateManyUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        updateOneUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        upsertOneUser(ctx, info, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
                return (0, helpers_1.getPrismaFromContext)(ctx).user.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
            });
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "UserCrudResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _aggregateUser_decorators = [TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
                nullable: false
            })];
        _createManyUser_decorators = [TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
                nullable: false
            })];
        _createManyAndReturnUser_decorators = [TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUser_1.CreateManyAndReturnUser], {
                nullable: false
            })];
        _createOneUser_decorators = [TypeGraphQL.Mutation(_returns => User_1.User, {
                nullable: false
            })];
        _deleteManyUser_decorators = [TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
                nullable: false
            })];
        _deleteOneUser_decorators = [TypeGraphQL.Mutation(_returns => User_1.User, {
                nullable: true
            })];
        _findFirstUser_decorators = [TypeGraphQL.Query(_returns => User_1.User, {
                nullable: true
            })];
        _findFirstUserOrThrow_decorators = [TypeGraphQL.Query(_returns => User_1.User, {
                nullable: true
            })];
        _users_decorators = [TypeGraphQL.Query(_returns => [User_1.User], {
                nullable: false
            })];
        _user_decorators = [TypeGraphQL.Query(_returns => User_1.User, {
                nullable: true
            })];
        _getUser_decorators = [TypeGraphQL.Query(_returns => User_1.User, {
                nullable: true
            })];
        _groupByUser_decorators = [TypeGraphQL.Query(_returns => [UserGroupBy_1.UserGroupBy], {
                nullable: false
            })];
        _updateManyUser_decorators = [TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
                nullable: false
            })];
        _updateOneUser_decorators = [TypeGraphQL.Mutation(_returns => User_1.User, {
                nullable: true
            })];
        _upsertOneUser_decorators = [TypeGraphQL.Mutation(_returns => User_1.User, {
                nullable: false
            })];
        __esDecorate(_classThis, null, _aggregateUser_decorators, { kind: "method", name: "aggregateUser", static: false, private: false, access: { has: obj => "aggregateUser" in obj, get: obj => obj.aggregateUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createManyUser_decorators, { kind: "method", name: "createManyUser", static: false, private: false, access: { has: obj => "createManyUser" in obj, get: obj => obj.createManyUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createManyAndReturnUser_decorators, { kind: "method", name: "createManyAndReturnUser", static: false, private: false, access: { has: obj => "createManyAndReturnUser" in obj, get: obj => obj.createManyAndReturnUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createOneUser_decorators, { kind: "method", name: "createOneUser", static: false, private: false, access: { has: obj => "createOneUser" in obj, get: obj => obj.createOneUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteManyUser_decorators, { kind: "method", name: "deleteManyUser", static: false, private: false, access: { has: obj => "deleteManyUser" in obj, get: obj => obj.deleteManyUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteOneUser_decorators, { kind: "method", name: "deleteOneUser", static: false, private: false, access: { has: obj => "deleteOneUser" in obj, get: obj => obj.deleteOneUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findFirstUser_decorators, { kind: "method", name: "findFirstUser", static: false, private: false, access: { has: obj => "findFirstUser" in obj, get: obj => obj.findFirstUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findFirstUserOrThrow_decorators, { kind: "method", name: "findFirstUserOrThrow", static: false, private: false, access: { has: obj => "findFirstUserOrThrow" in obj, get: obj => obj.findFirstUserOrThrow }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _users_decorators, { kind: "method", name: "users", static: false, private: false, access: { has: obj => "users" in obj, get: obj => obj.users }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _user_decorators, { kind: "method", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUser_decorators, { kind: "method", name: "getUser", static: false, private: false, access: { has: obj => "getUser" in obj, get: obj => obj.getUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _groupByUser_decorators, { kind: "method", name: "groupByUser", static: false, private: false, access: { has: obj => "groupByUser" in obj, get: obj => obj.groupByUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateManyUser_decorators, { kind: "method", name: "updateManyUser", static: false, private: false, access: { has: obj => "updateManyUser" in obj, get: obj => obj.updateManyUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateOneUser_decorators, { kind: "method", name: "updateOneUser", static: false, private: false, access: { has: obj => "updateOneUser" in obj, get: obj => obj.updateOneUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _upsertOneUser_decorators, { kind: "method", name: "upsertOneUser", static: false, private: false, access: { has: obj => "upsertOneUser" in obj, get: obj => obj.upsertOneUser }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserCrudResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserCrudResolver = _classThis;
})();
exports.UserCrudResolver = UserCrudResolver;
