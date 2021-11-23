import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HistoryContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.missionName}>
        Starlink-10 (v1.0) & SkySat 19-21
      </Text>
      <Text style={styles.missionDate}>
        2020-08-18
      </Text>

      <View style={styles.viewMoreContainer}>
        <Text style={styles.learnMoreText}>Click here to learn more!</Text>
        <View style={styles.nextContainer}>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  missionName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  missionDate: {
    marginTop: 5,
    fontSize: 12,
    color: 'grey',
  },
  viewMoreContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  learnMoreText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  nextContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HistoryContainer
