export enum ActionType {
  CreateUser,
  UpdateUser,
  RemoveUser,
}

export interface CreateUser {
  type: ActionType.CreateUser;
  payload: string;
}

export interface UpdateUser {
  type: ActionType.UpdateUser;
  payload: string;
}


export interface RemoveUser {
  type: ActionType.RemoveUser;
}

export type AuthActions = CreateUser | UpdateUser | RemoveUser
