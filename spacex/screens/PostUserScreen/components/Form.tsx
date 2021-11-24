import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';
import uuid from 'react-native-uuid';
import { useToast } from "react-native-toast-notifications";

import { AuthContext } from '../../../context/auth';

const Form = () => {
  const context = useContext(AuthContext);

  const [name, setName] = useState("");
  const [rocket, setRocket] = useState("");
  const [twitter, setTwitter] = useState("");

  const toast = useToast();

  const [addUser, { loading }] = useMutation(POST_USER, {
    update(_, result) {
      const user = result.data.insert_users.returning.find((info) => info.name === name);
      console.log(user.id);
      context.createUser(user.id);
      toast.show("Create Successful");
    }
  });

  const handleOnPress = () => {
    if (name.trim() === "" || rocket.trim() === "" || twitter.trim() === "")
      toast.show("Please ensure all fields are filled!");
    else {
      const id = uuid.v4();
      addUser({ variables: { id, name, rocket, twitter } })
    }
  }

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  // add error

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
        <Text style={styled.buttonText}>Welcome to SpaceX</Text>
      </Pressable>
    </View>
  )
}

const POST_USER = gql` 
  mutation POST_USER($id: uuid!, $name: String!, $rocket: String!, $twitter: String!) {
    insert_users(objects: {name: $name, rocket: $rocket, twitter: $twitter, id: $id}) {
      returning {
        id
        name
        rocket
        timestamp
        twitter
      }
    }
  }
`;

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
  }
});

export default Form
