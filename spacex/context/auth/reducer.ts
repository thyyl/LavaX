import { ActionType, AuthActions } from "./action"
import { User } from "./context"

export const AuthReducer = (state: User, action: AuthActions) => {
  switch(action.type) {
    case ActionType.CreateUser:
      return {
        ...state,
        user: action.payload
      }

    case ActionType.UpdateUser:
      return {
        ...state,
        user: action.payload
      }

    case ActionType.RemoveUser:
      return {
        ...state,
        user: null,
      }
  }
}