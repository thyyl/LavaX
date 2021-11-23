import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import MissionContainer from './MissionContainer'

const MissionList = ({launches}) => {
  return (
    <ScrollView style={styles.container}>
      {
        launches.map((launch) => {
          return (
            <MissionContainer key={launch.id} launch={launch} />
          )
        })  
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    borderRadius: 20,
    padding: 20,
  },
})

export default MissionList
