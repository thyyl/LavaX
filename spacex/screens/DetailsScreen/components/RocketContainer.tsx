import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const RocketContainer = ({id}) => {

  const getImage = () => {
    switch (id) {
      case 'falcon1':
        return require('../../../assets/falcon1.jpeg')
      case 'falcon9':
        return require('../../../assets/falcon9.jpeg')
      case 'falconheavy':
        return require('../../../assets/falconheavy.jpeg')
      default:
        return require('../../../assets/starship.jpeg')
    }
  }

  const image = getImage();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageContainer}/>
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
