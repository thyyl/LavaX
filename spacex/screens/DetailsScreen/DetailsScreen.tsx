import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import DetailsContainer from './components/DetailsContainer';
import RocketContainer from './components/RocketContainer';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <RocketContainer />
      <DetailsContainer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-start',
  },
});


export default DetailsScreen
