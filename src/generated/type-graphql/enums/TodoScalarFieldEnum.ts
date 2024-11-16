import * as TypeGraphQL from "type-graphql";

export enum TodoScalarFieldEnum {
  id = "id",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TodoScalarFieldEnum, {
  name: "TodoScalarFieldEnum",
  description: undefined,
});
