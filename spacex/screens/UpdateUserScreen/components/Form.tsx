import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-native-loading-spinner-overlay';

const Form = () => {
  const [name, setName] = useState("");
  const [rocket, setRocket] = useState("");
  const [twitter, setTwitter] = useState("");

  const [udpateUser, {data, loading, error}] = useMutation(UPDATE_USER);

  const id = "1200de08-1514-468c-8c4c-91afb99fa8bd";

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  // add error

  console.log(data)

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
        onPress={() => udpateUser({ variables: { id, name, rocket, twitter } })}
      > 
        <Text style={styled.buttonText}>Welcome to SpaceX</Text>
      </Pressable>
    </View>
  )
}

const UPDATE_USER = gql` 
  mutation UPDATE_USER($id: uuid!, $name: String!, $rocket: String!, $twitter: String!) {
    update_users(where: {id: {_eq: $id}}, _set: {name: $name, rocket: $rocket, twitter: $twitter}) {
      returning {
        id
        rocket
        name
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
