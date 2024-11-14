// src/schema/product.ts
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}