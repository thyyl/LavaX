import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { useMutation } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Spinner from 'react-native-loading-spinner-overlay';
import { useToast } from "react-native-toast-notifications";

import { LocalAuthContext } from '../../../context/localAuth';
import { CREATE_POST } from '../../../utils/graphql';

const Form = () => {
  const {user} = useContext(LocalAuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toast = useToast();

  const client = new ApolloClient<{}>({
    uri: 'http://192.168.0.169:3000/graphql',
  })

  const [addUser, { loading }] = useMutation(CREATE_POST, {
    update(_, result) {
      console.log(result)
      toast.show("Create Successful");
    },
    client: client
  });

  const handleOnPress = () => {
    if (title.trim() === "" || description.trim() === "")
      toast.show("Please ensure all fields are filled!");
    else {
      addUser({ variables: { user, title, description } })
    }
  }

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  return (
    <View style={styled.container}>
      <View style={styled.inputContainer}>
        <Text style={styled.textFieldLabel}>
          Title
        </Text>
        <TextInput
          value={title}
          style={styled.textFieldInput}
          onChangeText={text => setTitle(text)}
          placeholder="Enter your title"
      />
      </View>

      <View style={styled.inputContainer}>
        <Text style={styled.textFieldLabel}>
          Desc
        </Text>
        <TextInput
          value={description}
          style={styled.textFieldInput}
          onChangeText={text => setDescription(text)}
          placeholder="Enter your description"
      />
      </View>

      <Pressable
        style={styled.button}
        onPress={handleOnPress}
      > 
        <Text style={styled.buttonText}>Post it!</Text>
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
  }
});

export default Form
