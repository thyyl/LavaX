export enum ActionType {
  CreateUser,
  RemoveUser,
}

export interface CreateUser {
  type: ActionType.CreateUser;
  payload: string;
}

export interface RemoveUser {
  type: ActionType.RemoveUser;
}

export type LocalAuthActions = CreateUser | RemoveUser
