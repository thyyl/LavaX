import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const EngineContainer = () => {
  return (
    <View style={styles.categoryContainer}>
      <Ionicons name="rocket-outline" size={25} color="grey" style={{'marginBottom': 5}}/>
      <Text style={styles.categoryTraits}>Merlin</Text>
      <Text style={styles.categoryText}>Type</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    height: 125,
    width: 100,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 20,
    paddingLeft: 20,
  },
  categoryTraits: {
    color: '#1b2763',
    fontSize: 20,
    fontWeight: 'bold'
  },
  categoryText: {
    fontSize: 12.5,
  }
});

export default EngineContainer
