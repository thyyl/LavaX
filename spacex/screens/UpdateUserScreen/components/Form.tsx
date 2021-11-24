import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';
import { useToast } from "react-native-toast-notifications";

import ErrorScreen from '../../ErrorScreen/ErrorScreen';
import { UPDATE_USER } from '../../../utils/graphql';
import { UserInterface } from '../../../interface/userInterface';

const Form = ({user, updateUser}) => {
  const [name, setName] = useState("");
  const [rocket, setRocket] = useState("");
  const [twitter, setTwitter] = useState("");
  const toast = useToast();


  const [graphqlUpdate, { loading, error}] = useMutation(UPDATE_USER, {
    update(_, result) {
      const user = result
        .data.update_users
        .returning
        .find((info: UserInterface) => info.name === name);
      console.log(user.id);
      updateUser(user.id);
      toast.show("Update Successful");
    }
  });

  const handleOnPress = () => {
    if (name.trim() === "" || rocket.trim() === "" || twitter.trim() === "")
      toast.show("Please ensure all fields are filled!");
    else {
      const userID = user;
      graphqlUpdate({ variables: { userID, name, rocket, twitter } })
    }
  }

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  if (error)
    return <ErrorScreen />

  return (
    <View style={styled.container}>
      <View style={styled.inputContainer}>
        <Text style={styled.textFieldLabel}>
          Name
        </Text>
        <TextInput
          value={name}
          style={styled.textFieldInput}
          onChangeText={text => setName(text)}
          placeholder="Enter your name"
      />
      </View>

      <View style={styled.inputContainer}>
        <Text style={styled.textFieldLabel}>
          Rocket
        </Text>
        <TextInput
          value={rocket}
          style={styled.textFieldInput}
          onChangeText={text => setRocket(text)}
          placeholder="Enter your rocket"
      />
      </View>

      <View style={styled.inputContainer}>
        <Text style={styled.textFieldLabel}>
          Twitter
        </Text>
        <TextInput
          value={twitter}
          style={styled.textFieldInput}
          onChangeText={text => setTwitter(text)}
          placeholder="Enter your twitter"
      />
      </View>

      <Pressable
        style={styled.button}
        onPress={handleOnPress}
      > 
        <Text style={styled.buttonText}>Update Me!</Text>
      </Pressable>
    </View>
  )

}

const styled = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
    paddingRight: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#e4e3e3',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  textFieldLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textFieldInput: {
    width: '70%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
});

export default Form