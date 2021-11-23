import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  userID: string;

  @Field()
  email: string;

  @Field()
  password: string;
}