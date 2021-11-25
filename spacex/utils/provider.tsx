import ApolloClient from 'apollo-boost';
import React from 'react'

import { AuthProvider } from '../context/auth'
import { LocalAuthProvider } from '../context/localAuth';
import { PostProvider } from '../context/post';
import { ApolloProvider } from 'react-apollo'
import { ToastProvider } from 'react-native-toast-notifications'

const spaceX = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
})

const ProviderWrapper = (props) => {
  return (
    <AuthProvider>
      <LocalAuthProvider>
        <PostProvider>
          <ApolloProvider client={spaceX} >
            <ToastProvider>
              {props.children}
            </ToastProvider>
          </ApolloProvider>
        </PostProvider>
      </LocalAuthProvider>
    </AuthProvider>
  )
}

export default ProviderWrapper

