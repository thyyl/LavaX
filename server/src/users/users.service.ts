import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from "./dto/args/get-user.args";
import { ValidateUser } from "./dto/args/validate-user.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { User } from "./models/user";

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userID: uuidv4(),
      ...createUserData
    }

    this.users.push(user);

    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find(user => user.email === getUserArgs.email)
  }

  public validateUser(validateUserArgs: ValidateUser): User {
    const user = this.users.find(user => user.email === validateUserArgs.email)

    if (user && user.password === validateUserArgs.password) {
      return user;
    }

    return null;
  }

}