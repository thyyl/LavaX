import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native'

import LoginForm from './components/LoginForm';

const LoginScreen = ({navigation} : {navigation: any}) => {
  const NavigateToRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.welcomeBackText}>Welcome back!</Text>
      <Text style={styles.signInText}>Sign in to your account</Text>

      <LoginForm />
      
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <Text style={styles.signUpText} onPress={NavigateToRegister}>Sign Up!</Text>
      </View>

    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingLeft: 30,
  },
  welcomeBackText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  signInText: {
    fontSize: 17.5,
    color: 'grey',
    marginTop: 5,
  },
  bottomView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingRight: 30,
    marginTop: 50, 
  },
  bottomText: {
    fontSize: 15,
    fontWeight: '600',
  },
  signUpText: {
    fontSize: 15,
    fontWeight: '700',
  }
});

export default LoginScreen
