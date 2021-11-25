import React, { useReducer } from "react";
import { ActionType } from "./auth/action";
import { AuthContext } from "./auth/context";
import { AuthReducer } from "./auth/reducer";

function AuthProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  function createUser(data: string) {
    dispatch({
      type: ActionType.CreateUser,
      payload: data
    })
  }

  function updateUser(data: string) {
    dispatch({
      type: ActionType.UpdateUser,
      payload: data
    })
  }

  function removeUser() {
    dispatch({
      type: ActionType.RemoveUser,
    })
  }

  return(
    <AuthContext.Provider
      value={{ user: state.user, createUser, updateUser, removeUser }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }