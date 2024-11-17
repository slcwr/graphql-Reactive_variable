import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutTodosInput } from "../inputs/UserCreateNestedOneWithoutTodosInput";

@TypeGraphQL.InputType("TodoCreateInput", {})
export class TodoCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTodosInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTodosInput;
}
