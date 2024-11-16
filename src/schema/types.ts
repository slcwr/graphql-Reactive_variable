// src/schema/types.ts
import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => Int)  // IDの型をIntに変更
  id: number;        // numberに変更

  @Field(() => String)  // 明示的に型を指定
  username: string;

  @Field(() => String)  // 明示的に型を指定
  password: string;

  @Field(() => [Todo], { nullable: true })  // 配列の場合
  todos?: Todo[];
}

@ObjectType()
export class Todo {
  @Field(() => Int)  // IDの型をIntに変更
  id: number;        // numberに変更

  @Field(() => String)
  description: string;

  @Field(() => User)
  user: User;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}