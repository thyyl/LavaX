import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetAllPostArgs } from "./dto/args/get-all-post-args";
import { GetPostArgs } from "./dto/args/get-post-args";
import { CreatePostInput } from "./dto/input/create-post.input";
import { UpdatePostInput } from "./dto/input/update-post.input";
import { Post } from "./models/post";
import { PostsService } from "./posts.service";


@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post, { name: 'post', nullable: true})
  getPost(@Args() getPostArgs: GetPostArgs): Post {
    return this.postsService.getPost(getPostArgs);
  }

  @Query(() => [Post], { name: 'posts', nullable: true})
  getPosts(@Args() getAllPostArgs: GetAllPostArgs): Post[] {
    return this.postsService.getPosts(getAllPostArgs);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostData') updatePostInput: UpdatePostInput): Post {
    return this.postsService.updatePost(updatePostInput)
  }

  @Mutation(() => Post)
  createPost(@Args('createPostData') createPostData: CreatePostInput): Post {
    return this.postsService.createPost(createPostData);
  }

  @Mutation(() => Post, { nullable: true})
  deletePost(@Args() getPostArgs: GetPostArgs): Post {
    return this.postsService.deletePost(getPostArgs);
  }
}