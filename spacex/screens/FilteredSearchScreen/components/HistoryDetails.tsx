import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HistoryContainer from './HistoryContainer'

interface Link {
  article_link: String,
}

interface Rocket {
  rocket_name: String
}

interface Launch {
  id: string,
  launch_year: String,
  links: Link,
  mission_name: String,
  rocket_name: Rocket,
}

const HistoryDetails = ({launches}) => {
  return (
    <ScrollView style={styles.container}>
      {
        launches.map((launch: Launch) => {
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
