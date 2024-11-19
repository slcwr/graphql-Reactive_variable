import * as crudResolversImport from "./resolvers/crud/resolvers-crud.index";
import * as relationResolversImport from "./resolvers/relations/resolvers.index";
export * from "./enums";
export * from "./models";
export * from "./resolvers/crud";
export const crudResolvers = Object.values(crudResolversImport);
export * from "./resolvers/relations";
export const relationResolvers = Object.values(relationResolversImport);
export * from "./resolvers/inputs";
export * from "./resolvers/outputs";
export * from "./enhance";
export * from "./scalars";
export const resolvers = [
    ...crudResolvers,
    ...relationResolvers,
];
//# sourceMappingURL=index.js.map