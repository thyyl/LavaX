import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import Form from './components/Form';

const AddPostScrren = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleHeader}>Tell us about your day!</Text>
      <Form />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  titleHeader: {
    fontSize: 35,
    fontWeight: "700",
  },
});

export default AddPostScrren
