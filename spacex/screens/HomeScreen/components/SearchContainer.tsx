import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchContainer = () => {

  return (
    <View style={styled.container}>
      <Text style={styled.titleHeader}>Let's find a rocket for you</Text>
      <View style={styled.inputContainer}>
        <Ionicons name="search-outline" size={20} color="black" />
        <TextInput
          style={styled.input}
          selectionColor={'black'}
          placeholder={'Search a rocket here!'}
        />
        <Ionicons name="options-outline" size={25} color='black' style={{marginLeft: 30}} />
      </View>

    </View>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
  },
  titleHeader: {
    fontSize: 35,
    fontWeight: "700"
  },
  inputContainer: {
    width: "100%",
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  input: {
    height: 40,
    width: "70%",
    fontSize: 15,
    marginLeft: 20,
    fontWeight: "700",
  },
})

export default SearchContainer
