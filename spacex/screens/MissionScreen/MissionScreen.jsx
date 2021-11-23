import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';
import { Ionicons } from '@expo/vector-icons';

import MissionList from './components/MissionList';

const MissionScreen = ({route}) => {
  const { missionName } = route.params;
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 3);
  }

  const backPage = () => {
    if (page < 0)
      return
    setPage(page - 3);
  }

  const { data, loading, error } = useQuery(GET_MISSION_INFO, {
    variables: { missionName, page }
  });

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
      textStyle={styles.spinnerTextStyle}
    />

  //TODO show error

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleRow}>
        <TouchableOpacity onPress={backPage}>
          <Ionicons name="chevron-back-outline" size={30} color="black"/>
        </TouchableOpacity>

        <Text style={styles.titleHeader}>Missions</Text>

        <TouchableOpacity onPress={nextPage}>
          <Ionicons name="chevron-forward-outline" size={30} color="black"/>
        </TouchableOpacity>
      </View>
      <MissionList launches={data.launchesPast} page={page}/>
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
    paddingTop: 50,
  },
  titleHeader: {
    fontSize: 35,
    fontWeight: "700",
  },
  titleRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  }
});

const GET_MISSION_INFO = gql` 
  query GET_MISSION_INFO($missionName: String!, $page: Int!) {
    launchesPast(limit: 3, offset: $page, find: {mission_name: $missionName}) {
      mission_name
      links {
        article_link
      }
      launch_date_utc
      rocket {
        rocket_name
      }
      id
    }
  }
`;


export default MissionScreen
