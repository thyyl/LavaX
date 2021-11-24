import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import RocketContainer from './RocketContainer'

const RocketList = ({rockets, onRocketPressed, navigation}) => {
  const navigateToPost = () => {
    navigation.navigate('Post');
  }

  return (
    <View style={styled.container}>
      <View style={styled.row}>
        <Text style={styled.headerText}>Popular Rockets</Text>

        <TouchableOpacity onPress={navigateToPost}>
          <Text style={styled.headerText}>Posts</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        alwaysBounceHorizontal={true}
        alwaysBounceVertical={true}
        bounces={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

        { rockets && rockets.map(
          (rocket) => 
          <TouchableOpacity onPress={() => onRocketPressed(rocket.id)} key={rocket.id}>
            <RocketContainer rocket={rocket} />
          </TouchableOpacity>
          )
        }
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
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  }
})

export default RocketList
