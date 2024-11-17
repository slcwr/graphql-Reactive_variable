import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TodoScalarWhereWithAggregatesInput", {})
export class TodoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TodoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TodoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TodoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TodoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
