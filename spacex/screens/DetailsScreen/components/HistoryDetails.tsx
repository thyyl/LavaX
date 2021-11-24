import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useQuery } from 'react-apollo';
import Spinner from 'react-native-loading-spinner-overlay';

import HistoryContainer from './HistoryContainer'
import { GET_PAST_HISTORIES } from '../../../utils/graphql';
import { Launch } from '../../../interface/launchInterface';

const HistoryDetails = ({rocketName}) => {

  const { data, loading } = useQuery(GET_PAST_HISTORIES);
  let filteredData: [Launch];

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  if (data) {
    filteredData = 
      data && data.launchesPast.filter((info: Launch) => info.rocket.rocket_name === rocketName)
  }

  console.log(data)
  
  return (
    <ScrollView style={styles.container}>
      {
        filteredData?.map(
          (launches) => <HistoryContainer key={launches.id} launches={launches}/>
        )
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
    width: '100%',
    paddingRight: 30,
  },
})

export default HistoryDetails
