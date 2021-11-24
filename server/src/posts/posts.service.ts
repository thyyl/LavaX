import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { GetAllPostArgs } from "./dto/args/get-all-post-args";
import { GetPostArgs } from "./dto/args/get-post-args";
import { CreatePostInput } from "./dto/input/create-post.input";
import { UpdatePostInput } from "./dto/input/update-post.input";

import { Post } from "./models/post";

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  public createPost(createPostData: CreatePostInput): Post {
    const newPost: Post = {
      postID: uuidv4(),
      ...createPostData
    }

    this.posts.push(newPost);
    return newPost;
  }

  public updatePost(updatePostData: UpdatePostInput): Post {
    const post = this.posts.find(post => post.postID === updatePostData.postID)

    if (post) {
      post.title = updatePostData.title;
      post.description = updatePostData.description;
    } else {
      throw new Error("Post not found!");
    }

    return post;
  }

  public getPost(getPostArgs: GetPostArgs): Post {
    const post = this.posts.find(post => post.postID === getPostArgs.postID)

    if (!post)
      throw new Error("Post not found!")
    return post
  }

  public getPosts(): Post[] {
    return this.posts
  }

  public deletePost(getPostArgs: GetPostArgs): Post {
    const post = this.posts.find(post => post.postID !== getPostArgs.postID)

    if (!post)
      throw new Error("Post not found!")
    else {
      this.posts = this.posts.filter(post => post.postID !== getPostArgs.postID)
    }

    return post;
  }
}