import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
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

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "username", "password", "createdAt", "updatedAt"],
  Todo: ["id", "description", "createdAt", "updatedAt", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
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

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
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

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

