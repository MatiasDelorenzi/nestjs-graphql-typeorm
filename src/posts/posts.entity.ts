import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'Blog post' })
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'text' })
  @Field()
  title: string;

  @Column({ type: 'text' })
  @Field()
  content: string;

  @Column({ type: 'text' })
  @Field()
  category: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  author?: string;
}
