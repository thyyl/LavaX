import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import RocketContainer from './RocketContainer'

const RocketList = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.headerText}>Popular Rockets</Text>

      <ScrollView 
        alwaysBounceHorizontal={true}
        alwaysBounceVertical={true}
        bounces={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        
        <RocketContainer />
        <RocketContainer />
      </ScrollView>
    </View>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 4,
    width: "100%",
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default RocketList
