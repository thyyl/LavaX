import { ActionType, LocalAuthActions } from "./action"
import { User } from "./context"

export const localAuthReducer = (state: User, action: LocalAuthActions) => {
  switch(action.type) {
    case ActionType.CreateUser:
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