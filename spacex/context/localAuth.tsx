import React, { useReducer } from "react";
import { ActionType } from "./localAuth/action";
import { LocalAuthContext } from "./localAuth/context";
import { localAuthReducer } from "./localAuth/reducer";

function LocalAuthProvider(props) {
  const [state, dispatch] = useReducer(localAuthReducer, { user: null });

  function createUser(data: string) {
    dispatch({
      type: ActionType.CreateUser,
      payload: data
    })
  }

  function removeUser() {
    dispatch({
      type: ActionType.RemoveUser,
    })
  }

  return(
    <LocalAuthContext.Provider
      value={{ user: state.user, createUser, removeUser }}
      {...props}
    />
  )
}

export { LocalAuthContext, LocalAuthProvider }