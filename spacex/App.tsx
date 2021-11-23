import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const HomeStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Login">  
        <HomeStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name='Details' component={DetailsScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

