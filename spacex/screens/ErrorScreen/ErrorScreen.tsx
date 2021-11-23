import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import LottieView from 'lottie-react-native';

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/astronaout.json')}
        autoPlay
        loop
      />
      <Text style={styles.titleHeader}>Error has occured!</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  titleHeader: {
    marginTop: 350,
    fontSize: 25,
    fontWeight: "700",
    textAlign: 'center',
  },
});

export default ErrorScreen
