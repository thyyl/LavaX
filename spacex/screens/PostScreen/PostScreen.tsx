import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Spinner from 'react-native-loading-spinner-overlay';

import { FIND_ALL_POST } from '../../utils/graphql';
import PostList from './components/PostList';

const PostScreen = ({navigation}) => {

  const client = new ApolloClient<{}>({
    uri: 'http://192.168.0.169:3000/graphql',
  })

  return (
    <Query query={FIND_ALL_POST} client={client}>
      {({ loading, data }) => {
        if (loading)
          return <Spinner
            visible={loading}
            textContent={'Loading...'}
          />
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.row}>
              <Text style={styles.titleHeader}>My Posts</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddPost')}>
                <Ionicons name="add-circle-outline" size={30} color="black" />
              </TouchableOpacity>
            </View>
            {
              data && <PostList postsData={data.posts}/>
            }
          </SafeAreaView>
        )
      }}
    </Query>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  titleHeader: {
    fontSize: 35,
    fontWeight: "700",
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  }
});


export default PostScreen
