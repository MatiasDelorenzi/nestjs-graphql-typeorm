import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Blog post' })
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  author?: string;
}
