import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './dtos/createPost.input';
import { Post } from './posts.entity';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePostInput): Promise<Post> {
    return this.postsService.create(postInput);
  }
}
