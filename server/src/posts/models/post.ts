import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
  @Field()
  postID: string;

  @Field()
  userID: string;

  @Field()
  title: string;

  @Field()
  description: string;
}