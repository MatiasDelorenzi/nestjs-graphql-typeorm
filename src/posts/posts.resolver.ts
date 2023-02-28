import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './posts.entity';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }
}
