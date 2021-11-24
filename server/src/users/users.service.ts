import { Injectable } from "@nestjs/common";
import e from "cors";
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from "./dto/args/get-user.args";
import { ValidateUser } from "./dto/args/validate-user.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { UserInputError } from "apollo-server-errors";

import { User } from "./models/user";

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const existingUser = this.users.find(user => user.email === createUserData.email);

    if (existingUser) {
      throw new UserInputError('Email is taken', {
        errors: {
          userID: 'This email is taken',
        }
      })
    } else {
      const user: User = {
        userID: uuidv4(),
        ...createUserData
      }
  
      this.users.push(user);
  
      return user;
    }
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find(user => user.email === getUserArgs.email)
  }

  public validateUser(validateUserArgs: ValidateUser): User {
    const user = this.users.find(user => user.email === validateUserArgs.email)

    if (user && user.password === validateUserArgs.password) {
      return user;
    } else if (user.password !== validateUserArgs.password) {
      throw new UserInputError('Wrong credentials is taken', {
        errors: {
          userID: 'Wrong password',
        }
      })
    } else {
      throw new UserInputError('User does not exist', {
        errors: {
          userID: 'Wrong email',
        }
      })
    }

    return null;
  }

}