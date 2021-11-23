import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const RocketContainer = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/falcon1.jpeg")} style={styles.imageContainer}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  }
});

export default RocketContainer
