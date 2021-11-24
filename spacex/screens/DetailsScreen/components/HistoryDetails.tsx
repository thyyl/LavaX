import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';

import HistoryContainer from './HistoryContainer'

const HistoryDetails = ({rocketName}) => {

  const { data, loading } = useQuery(GET_PAST_HISTORIES);
  let filteredData;

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  if (data) {
    filteredData = data && data.launchesPast.filter((info) => info.rocket.rocket_name === rocketName)
  }
  
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

const GET_PAST_HISTORIES = gql` {
  launchesPast {
    id
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
`

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
    width: '100%',
    paddingRight: 30,
  },
})

export default HistoryDetails
