import React, { useState } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

import HistoryDetails from './HistoryDetails';
import OverallDetails from './OverallDetails';

const DetailsContainer = ({rocket}) => {
  const [select, setSelect] = useState("Overall");

  const onSelectChange = (newSelect) => {
    setSelect(newSelect);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.rocketName}>{rocket.name}</Text>

      <View style={styles.selectionTab}>
        <Pressable 
          onPress={() => onSelectChange("Overall")}
          style={select === "Overall" ? styles.tabItemsContainerPressed : styles.tabItemsContainer}>
          <Text style={select === "Overall" ? styles.tabItemsPressed : styles.tabItems}>Overall</Text>
        </Pressable>

        <Pressable   
          onPress={() => onSelectChange("History")}
          style={select === "History" ? styles.tabItemsContainerPressed : styles.tabItemsContainer} key={'History'}>
          <Text style={select === "History" ? styles.tabItemsPressed : styles.tabItems}>History</Text>
        </Pressable>
      </View>

      {select === "Overall" && <OverallDetails rocket={rocket}/>}
      {select === "History" && <HistoryDetails rocket={rocket}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingRight: 0,
    paddingLeft: 30,
  },
  rocketName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  selectionTab: {
    marginTop: 30,
    paddingRight: 175,  
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabItemsContainer: {
    borderRadius: 15,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemsContainerPressed: {
    borderRadius: 10,
    backgroundColor: '#1b2763',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItems: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  tabItemsPressed: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  }
});

export default DetailsContainer
