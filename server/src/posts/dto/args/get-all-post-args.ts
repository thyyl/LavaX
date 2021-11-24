import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetAllPostArgs {
  @Field()
  @IsNotEmpty()
  userID: string;
}