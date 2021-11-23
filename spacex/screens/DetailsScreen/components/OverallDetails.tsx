import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import EngineContainer from './EngineContainer';

const OverallDetails = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
        </Text>

        <View style={styles.traitsRow}>
          <View style={styles.traitsContainer}>
            <Text style={styles.traitsText}>300m</Text>
            <Text style={styles.traitsCategory}>Height</Text>
          </View>

          <View style={styles.verticleLine} ></View>

          <View style={styles.traitsContainer}>
            <Text style={styles.traitsText}>50m</Text>
            <Text style={styles.traitsCategory}>Diameter</Text>
          </View>

          <View style={styles.verticleLine}></View>

          <View style={styles.traitsContainer}>
            <Text style={styles.traitsText}>100kg</Text>
            <Text style={styles.traitsCategory}>Mass</Text>
          </View>
        </View>

        <ScrollView style={styles.categoryRow} horizontal={true} showsHorizontalScrollIndicator={false}>
          <EngineContainer />
          <EngineContainer />
          <EngineContainer />
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingRight: 30,
  },
  description: {
    fontSize: 15,
    textAlign: 'justify'
  },
  traitsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  traitsContainer: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  traitsText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
  },
  traitsCategory: {
    fontWeight: '600',
    color: 'grey',
    fontSize: 15,
  },
  verticleLine:{
    height: '100%',
    width: 1,
    backgroundColor: '#90909075',
  },
  categoryRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
  },
});

export default OverallDetails
