import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { ToastProvider } from 'react-native-toast-notifications'

import { AuthProvider } from './context/auth'
import { LocalAuthProvider } from './context/localAuth';
import { PostProvider } from './context/post';

import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import FilteredSearchScreen from './screens/FilteredSearchScreen/FilteredSearchScreen';
import MissionScreen from './screens/MissionScreen/MissionScreen';
import PostUserScreen from './screens/PostUserScreen/PostUserScreen';
import UpdateUserScreen from './screens/UpdateUserScreen/UpdateUserScreen';
import PostScreen from './screens/PostScreen/PostScreen';
import AddPostScrren from './screens/AddPostScreen/AddPostScreen';

const HomeStack = createStackNavigator();

const spaceX = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
})

export default function App() {

  return (
    <NavigationContainer>
      <LocalAuthProvider>
        <AuthProvider>
          <PostProvider>
          <ToastProvider>
            <ApolloProvider client={spaceX} >
              <HomeStack.Navigator initialRouteName="Login">  
                <HomeStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='Filter' component={FilteredSearchScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='Details' component={DetailsScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='PostUser' component={PostUserScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='UpdateUser' component={UpdateUserScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='Post' component={PostScreen} options={{headerShown: false}}/>
                <HomeStack.Screen name='AddPost' component={AddPostScrren} options={{headerShown: false}}/>
                <HomeStack.Screen name='Mission' component={MissionScreen} options={{headerShown: false}}/>
              </HomeStack.Navigator>
            </ApolloProvider>
          </ToastProvider>
          </PostProvider>
        </AuthProvider>
      </LocalAuthProvider>
    </NavigationContainer>
  );
}

