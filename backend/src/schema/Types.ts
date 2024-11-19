// src/schema/types.ts
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  username: string;

  // passwordはGraphQLスキーマから除外
  password: string;

  @Field(() => [Todo], { nullable: true })
  todos?: Todo[];  // オプショナルに変更

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  description: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => User)
  user: User;
}

