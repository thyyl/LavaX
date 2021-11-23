import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';

import DetailsContainer from './components/DetailsContainer';
import RocketContainer from './components/RocketContainer';

const DetailsScreen = ({route}) => {
  const { itemId } = route.params;

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { itemId },
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
      <RocketContainer />
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

const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($itemId: ID!) {
    rocket(id: $itemId) {
      description
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      name
      engines {
        type
        version
        number
        layout
      }
      id
    }
  }
`;

export default DetailsScreen
