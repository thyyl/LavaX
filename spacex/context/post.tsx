import React, { useReducer, createContext } from "react";
import { PostInterface } from "../interface/postInterface";

const PostContext = createContext({
  post: null,
  createPost: (data: PostInterface) => {},
  removePost: () => {},
})

function postReducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return {
        ...state,
        post: action.payload
      }

    case 'REMOVE':
      return {
        ...state,
        post: null,
      }
  }
}

function PostProvider(props) {
  const [state, dispatch] = useReducer(postReducer, { post: null });

  function createPost(data: PostInterface) {
    dispatch({
      type: 'CREATE',
      payload: data
    })
  }

  function removePost() {
    dispatch({
      type: 'REMOVE',
    })
  }

  return(
    <PostContext.Provider
      value={{ post: state.post, createPost, removePost }}
      {...props}
    />
  )
}

export { PostContext, PostProvider }