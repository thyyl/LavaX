import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';
import HistoryDetails from './components/HistoryDetails';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import EmptyScreen from '../EmptyScreen/EmptyScreen';

const FilteredSearchScreen = ({route}) => {
  const { rocket, year } = route.params;

  const { data, loading, error } = useQuery(GET_PAST_INFO, {
    variables: { rocket, year }
  });

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  if (error)
    return <ErrorScreen />

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleHeader}>Past launches</Text>
      {
        data.launchesPast.length !== 0 
        ? <HistoryDetails launches={data.launchesPast} />
        : <EmptyScreen />
      }
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
    marginBottom: 30,
  },
});

const GET_PAST_INFO = gql` 
  query GET_PAST_INFO($rocket: String!, $year: String!) {
    launchesPast(find: {rocket_name: $rocket, launch_year: $year}) {
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


export default FilteredSearchScreen
