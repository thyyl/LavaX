import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, SafeAreaView, View, Pressable } from 'react-native'
import RegisterForm from './components/RegisterForm';

const RegisterScreen = ({navigation} : {navigation: any}) => {
  
  const NavigateToLogin = () => {
    navigation.replace('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.welcomeText}>Rocket away!</Text>
      <Text style={styles.signUpText}>Create and account to catch up with your all-time favourite SpaceX rockets</Text>

      <RegisterForm navigation={navigation}/>
      
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <Pressable onPress={NavigateToLogin}>
          <Text style={styles.signInText}>Sign In!</Text>
        </Pressable>
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
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  signUpText: {
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
  signInText: {
    fontSize: 15,
    fontWeight: '700',
  }
});

export default RegisterScreen
