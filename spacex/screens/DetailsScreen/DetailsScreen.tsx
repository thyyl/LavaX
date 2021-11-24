import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useQuery } from 'react-apollo';
import Spinner from 'react-native-loading-spinner-overlay';

import DetailsContainer from './components/DetailsContainer';
import RocketContainer from './components/RocketContainer';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { GET_ROCKET_INFO } from '../../utils/graphql';

const DetailsScreen = ({route}) => {
  const { itemId } = route.params;

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { itemId },
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
      <RocketContainer id={data.rocket.id}/>
      <DetailsContainer rocket={data.rocket}/>
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
