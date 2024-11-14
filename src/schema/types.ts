// src/schema/types.ts
import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field(() => [Todo])
  todos: Todo[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => User)
  user: User;
}