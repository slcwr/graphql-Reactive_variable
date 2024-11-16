import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TodoWhereInput } from "../inputs/TodoWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TodoWhereUniqueInput", {})
export class TodoWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  AND?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  OR?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  NOT?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
