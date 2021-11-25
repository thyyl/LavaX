import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { PostContext } from '../../../context/post';

import { PostInterface } from '../../../interface/postInterface';
import EmptyScreen from '../../EmptyScreen/EmptyScreen';
import Post from './Post'

const PostList = ({postsData}) => {
  const {post, removePost} = useContext(PostContext)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  useEffect(() => {
    post && setPosts([...posts, post]);
    removePost();
  }, [post])

  const postDeleted = (id: string) => {
    const newPost = posts.filter(post => post.postID !== id);
    setPosts(newPost);
    console.log(newPost.length)
  }

  return (
    <ScrollView style={styles.container}>
      {
        posts && posts.length > 0  

        ? posts.map((post: PostInterface) => {
            return (
              <Post post={post} key={post.postID} postID={post.postID} postDeleted={postDeleted}/>
            )
          })  

        : <EmptyScreen />
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    borderRadius: 20,
    padding: 20,
    paddingRight: 30,
  },
})

export default PostList
