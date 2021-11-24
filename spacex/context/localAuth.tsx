import React, { useReducer, createContext } from "react";

const LocalAuthContext = createContext({
  user: null,
  createUser: (data) => {},
  removeUser: () => {},
})

function localAuthReducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return {
        ...state,
        user: action.payload
      }

    case 'REMOVE':
      return {
        ...state,
        user: null,
      }
  }
}

function LocalAuthProvider(props) {
  const [state, dispatch] = useReducer(localAuthReducer, { user: null });

  function createUser(data) {
    dispatch({
      type: 'CREATE',
      payload: data
    })
  }

  function removeUser() {
    dispatch({
      type: 'REMOVE',
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