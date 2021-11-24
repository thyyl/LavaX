import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useQuery } from 'react-apollo';
import Spinner from 'react-native-loading-spinner-overlay';

import RocketList from './components/RocketList';
import SearchContainer from './components/SearchContainer';
import TopBar from './components/TopBar';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { FETCH_ROCKETS } from '../../utils/graphql';

export default function HomeScreen({navigation}) {

  const onRocketPressed = (id: string) => {
    navigation.navigate('Details', {
      itemId: id
    });
  }

  const onTabPressed = () => {
    navigation.navigate('PostUser')
  }

  const onProfilePress = () => {
    navigation.navigate('UpdateUser')
  }

  const { data, loading, error } = useQuery(FETCH_ROCKETS);

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
      <TopBar onTabPressed={onTabPressed} onProfilePress={onProfilePress}/>
      <SearchContainer navigation={navigation} />
      <RocketList rockets={data.rockets} onRocketPressed={onRocketPressed} navigation={navigation}/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
