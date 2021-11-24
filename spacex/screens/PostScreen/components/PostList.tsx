import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { PostInterface } from '../../../interface/postInterface';
import Post from './Post'

const PostList = ({postsData}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  useEffect(() => {

  }, [posts]);

  const postDeleted = (id: string) => {
    console.log(id);
    const newPost = posts.filter(post => post.postID !== id);
    setPosts(newPost);
    console.log(newPost.length)
  }

  return (
    <ScrollView style={styles.container}>
      {
        posts.map((post: PostInterface) => {
          return (
            <Post post={post} key={post.postID} postID={post.postID} postDeleted={postDeleted}/>
          )
        })  
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
