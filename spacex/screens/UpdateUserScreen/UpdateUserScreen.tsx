import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native'

import { AuthContext } from '../../context/auth';
import PostUserScreen from '../PostUserScreen/PostUserScreen';
import Form from './components/Form';

const UpdateUserScreen = () => {
  const { user, updateUser } = useContext(AuthContext);

  if (user)
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titleHeader}>Let's update your details</Text>
        <Form user={user} updateUser={updateUser} />
      </SafeAreaView>
    )
  
  return <PostUserScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  titleHeader: {
    fontSize: 35,
    fontWeight: "700",
  },
});



export default UpdateUserScreen
