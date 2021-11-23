import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LottieView from 'lottie-react-native';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/ice.json')}
        autoPlay
        loop
      />
      <Text style={styles.titleHeader}>It is empty!</Text>
      
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

export default EmptyScreen
