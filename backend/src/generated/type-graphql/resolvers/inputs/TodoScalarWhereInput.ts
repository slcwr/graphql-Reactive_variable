import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TodoScalarWhereInput", {})
export class TodoScalarWhereInput {
  @TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
    nullable: true
  })
  AND?: TodoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
    nullable: true
  })
  OR?: TodoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarWhereInput], {
    nullable: true
  })
  NOT?: TodoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
}
