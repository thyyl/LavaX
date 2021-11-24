import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useToast } from "react-native-toast-notifications";

import { validateArticle } from '../../../utils/validateArticle';

const MissionContainer = ({launch}) => {
  const toast = useToast();

  const handleClick = () => {
    validateArticle(launch.links.article_link, toast);
  };

  return (
    <View style={ launch.mission_name.length > 25 ? styles.longContainer : styles.container}>
      <Text style={styles.missionName}>
        {launch.mission_name}
      </Text>
      <Text style={styles.missionDate}>
        {launch.launch_date_utc.substr(0, 10)}
      </Text>

      <View style={styles.viewMoreContainer}>
        <Text style={styles.learnMoreText}>Click here to learn more!</Text>
        <TouchableOpacity onPress={handleClick}>
          <View style={styles.nextContainer}>
            <Ionicons name="chevron-forward-outline" size={25} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  longContainer: {
    height: 190,
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
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

export default MissionContainer
