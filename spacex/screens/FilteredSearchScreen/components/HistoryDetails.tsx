import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HistoryContainer from './HistoryContainer'

const HistoryDetails = ({launches}) => {
  return (
    <ScrollView style={styles.container}>
      {
        launches.map((launch) => {
          return (
            <HistoryContainer key={launch.id} launch={launch} />
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

export default HistoryDetails
