import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HistoryContainer from './HistoryContainer'

const HistoryDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <HistoryContainer />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
    width: '100%',
    paddingRight: 30,
  },
})

export default HistoryDetails
