import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ApolloClient from 'apollo-boost';
import Spinner from 'react-native-loading-spinner-overlay';
import { useToast } from "react-native-toast-notifications";
import { useMutation } from 'react-apollo';
import { DELETE_POST } from '../../../utils/graphql';

const Post = ({post, postID, postDeleted}) => {
  const client = new ApolloClient<{}>({
    uri: 'http://192.168.0.169:3000/graphql',
  })

  const toast = useToast();

  const [deletePost, { loading }] = useMutation(DELETE_POST, {
    update(_, result) {
      console.log(result)
      toast.show("Deleted Successfully");
    },
    client: client
  });

  const handleOnDelete = () => {
    deletePost({ variables: { postID } })
    postDeleted(postID)
  }

  if (loading) 
    return <Spinner
      visible={loading}
      textContent={'Loading...'}
    />

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{post.title}</Text>
        <TouchableOpacity onPress={handleOnDelete}>
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>{post.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  desc: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'justify',
  }
});

export default Post
