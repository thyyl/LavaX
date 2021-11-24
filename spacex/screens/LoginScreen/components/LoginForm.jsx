import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native'
import gql from 'graphql-tag';
import { useToast } from "react-native-toast-notifications";
import ApolloClient from 'apollo-boost';
import { useMutation } from 'react-apollo';
import Spinner from 'react-native-loading-spinner-overlay';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleOnSubmit = () => {
    if (email.trim() === "" || password.trim() === "") 
      toast.show("Please ensure all fields are filled!");
    else 
      loginUser({ variables: { email, password } });
  }

  const client = new ApolloClient({
    uri: 'http://192.168.0.169:3000/graphql',
  })

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result.data.validate);
      toast.show("Login!");
      navigation.navigate('Home');
    },
    client: client
  });

  if (loading)
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.textFieldLabel}>
          Email
        </Text>
        <TextInput
        value={email}
        style={styles.textFieldInput}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your email"
      />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textFieldLabel}>
          Password
        </Text>
        <TextInput
        value={password}
        secureTextEntry={true}
        style={styles.textFieldInput}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your password"
      />
      </View>

      <Pressable
        style={styles.button}
        onPress={handleOnSubmit}
      > 
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!){
    validate(email: $email, password: $password) {
      userID
      email
      password
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
    paddingRight: 30,
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
  errorsText: {
    fontSize: 12, 
    color: '#FF0D10',
    fontWeight: 'bold',
    marginTop: 5,
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
})

export default LoginForm
