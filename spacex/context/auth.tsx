import React, { useReducer, createContext } from "react";

const AuthContext = createContext({
  user: null,
  createUser: (data) => {},
  updateUser: (data) => {},
  removeUser: () => {},
})

function authReducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return {
        ...state,
        user: action.payload
      }
    
    case 'UPDATE':
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

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  function createUser(data) {
    dispatch({
      type: 'CREATE',
      payload: data
    })
  }

  function updateUser(data) {
    dispatch({
      type: 'UPDATE',
      payload: data
    })
  }

  function removeUser() {
    dispatch({
      type: 'REMOVE',
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