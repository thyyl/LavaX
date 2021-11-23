import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import Spinner from 'react-native-loading-spinner-overlay';

import RocketList from './components/RocketList';
import SearchContainer from './components/SearchContainer';
import TopBar from './components/TopBar';

export default function HomeScreen({navigation}) {

  const onRocketPressed = (id) => {
    navigation.navigate('Details', {
      itemId: id
    });
  }

  const customClient = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return (
    <Query query={FETCH_ROCKETS} client={customClient}>
      {({loading, error, data}) => {

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
            <TopBar />
            <SearchContainer 
              navigation={navigation}
            />
            <RocketList rockets={data.rockets} onRocketPressed={onRocketPressed}/>
          </SafeAreaView>
        );
      }}
    </Query>
  )
}

const FETCH_ROCKETS = gql` {
  rockets {
    active
    country
    id
    name
  }
}
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
