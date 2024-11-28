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
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Todo: crudResolvers.TodoCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Todo: {
        aggregateTodo: actionResolvers.AggregateTodoResolver,
        createManyTodo: actionResolvers.CreateManyTodoResolver,
        createManyAndReturnTodo: actionResolvers.CreateManyAndReturnTodoResolver,
        createOneTodo: actionResolvers.CreateOneTodoResolver,
        deleteManyTodo: actionResolvers.DeleteManyTodoResolver,
        deleteOneTodo: actionResolvers.DeleteOneTodoResolver,
        findFirstTodo: actionResolvers.FindFirstTodoResolver,
        findFirstTodoOrThrow: actionResolvers.FindFirstTodoOrThrowResolver,
        todos: actionResolvers.FindManyTodoResolver,
        todo: actionResolvers.FindUniqueTodoResolver,
        getTodo: actionResolvers.FindUniqueTodoOrThrowResolver,
        groupByTodo: actionResolvers.GroupByTodoResolver,
        updateManyTodo: actionResolvers.UpdateManyTodoResolver,
        updateOneTodo: actionResolvers.UpdateOneTodoResolver,
        upsertOneTodo: actionResolvers.UpsertOneTodoResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Todo: ["aggregateTodo", "createManyTodo", "createManyAndReturnTodo", "createOneTodo", "deleteManyTodo", "deleteOneTodo", "findFirstTodo", "findFirstTodoOrThrow", "todos", "todo", "getTodo", "groupByTodo", "updateManyTodo", "updateOneTodo", "upsertOneTodo"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateTodoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTodoArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnTodoArgs: ["data", "skipDuplicates"],
    CreateOneTodoArgs: ["data"],
    DeleteManyTodoArgs: ["where"],
    DeleteOneTodoArgs: ["where"],
    FindFirstTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTodoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTodoArgs: ["where"],
    FindUniqueTodoOrThrowArgs: ["where"],
    GroupByTodoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTodoArgs: ["data", "where"],
    UpdateOneTodoArgs: ["data", "where"],
    UpsertOneTodoArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Todo: relationResolvers.TodoRelationsResolver
};
const relationResolversInfo = {
    User: ["todos"],
    Todo: ["user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "username", "password", "createdAt", "updatedAt"],
    Todo: ["id", "description", "createdAt", "updatedAt", "userId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "username", "password", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTodo: ["_count", "_avg", "_sum", "_min", "_max"],
    TodoGroupBy: ["id", "description", "createdAt", "updatedAt", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["todos"],
    UserCountAggregate: ["id", "username", "password", "createdAt", "updatedAt", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "username", "password", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "username", "password", "createdAt", "updatedAt"],
    TodoCountAggregate: ["id", "description", "createdAt", "updatedAt", "userId", "_all"],
    TodoAvgAggregate: ["id", "userId"],
    TodoSumAggregate: ["id", "userId"],
    TodoMinAggregate: ["id", "description", "createdAt", "updatedAt", "userId"],
    TodoMaxAggregate: ["id", "description", "createdAt", "updatedAt", "userId"],
    CreateManyAndReturnUser: ["id", "username", "password", "createdAt", "updatedAt"],
    CreateManyAndReturnTodo: ["id", "description", "createdAt", "updatedAt", "userId", "user"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "username", "password", "createdAt", "updatedAt", "todos"],
    UserOrderByWithRelationInput: ["id", "username", "password", "createdAt", "updatedAt", "todos"],
    UserWhereUniqueInput: ["id", "username", "AND", "OR", "NOT", "password", "createdAt", "updatedAt", "todos"],
    UserOrderByWithAggregationInput: ["id", "username", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "password", "createdAt", "updatedAt"],
    TodoWhereInput: ["AND", "OR", "NOT", "id", "description", "createdAt", "updatedAt", "userId", "user"],
    TodoOrderByWithRelationInput: ["id", "description", "createdAt", "updatedAt", "userId", "user"],
    TodoWhereUniqueInput: ["id", "AND", "OR", "NOT", "description", "createdAt", "updatedAt", "userId", "user"],
    TodoOrderByWithAggregationInput: ["id", "description", "createdAt", "updatedAt", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    TodoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "createdAt", "updatedAt", "userId"],
    UserCreateInput: ["username", "password", "createdAt", "updatedAt", "todos"],
    UserUpdateInput: ["username", "password", "createdAt", "updatedAt", "todos"],
    UserCreateManyInput: ["id", "username", "password", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["username", "password", "createdAt", "updatedAt"],
    TodoCreateInput: ["description", "createdAt", "updatedAt", "user"],
    TodoUpdateInput: ["description", "createdAt", "updatedAt", "user"],
    TodoCreateManyInput: ["id", "description", "createdAt", "updatedAt", "userId"],
    TodoUpdateManyMutationInput: ["description", "createdAt", "updatedAt"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TodoListRelationFilter: ["every", "some", "none"],
    TodoOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "username", "password", "createdAt", "updatedAt"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "username", "password", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "username", "password", "createdAt", "updatedAt"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    TodoCountOrderByAggregateInput: ["id", "description", "createdAt", "updatedAt", "userId"],
    TodoAvgOrderByAggregateInput: ["id", "userId"],
    TodoMaxOrderByAggregateInput: ["id", "description", "createdAt", "updatedAt", "userId"],
    TodoMinOrderByAggregateInput: ["id", "description", "createdAt", "updatedAt", "userId"],
    TodoSumOrderByAggregateInput: ["id", "userId"],
    TodoCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    TodoUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutTodosInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutTodosNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    TodoCreateWithoutUserInput: ["description", "createdAt", "updatedAt"],
    TodoCreateOrConnectWithoutUserInput: ["where", "create"],
    TodoCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    TodoUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    TodoUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    TodoUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    TodoScalarWhereInput: ["AND", "OR", "NOT", "id", "description", "createdAt", "updatedAt", "userId"],
    UserCreateWithoutTodosInput: ["username", "password", "createdAt", "updatedAt"],
    UserCreateOrConnectWithoutTodosInput: ["where", "create"],
    UserUpsertWithoutTodosInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutTodosInput: ["where", "data"],
    UserUpdateWithoutTodosInput: ["username", "password", "createdAt", "updatedAt"],
    TodoCreateManyUserInput: ["id", "description", "createdAt", "updatedAt"],
    TodoUpdateWithoutUserInput: ["description", "createdAt", "updatedAt"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
