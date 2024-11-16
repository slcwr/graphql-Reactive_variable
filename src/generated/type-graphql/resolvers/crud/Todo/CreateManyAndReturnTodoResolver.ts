import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTodoArgs } from "./args/CreateManyAndReturnTodoArgs";
import { Todo } from "../../../models/Todo";
import { CreateManyAndReturnTodo } from "../../outputs/CreateManyAndReturnTodo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class CreateManyAndReturnTodoResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTodo], {
    nullable: false
  })
  async createManyAndReturnTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTodoArgs): Promise<CreateManyAndReturnTodo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).todo.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
