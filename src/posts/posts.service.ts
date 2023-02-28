import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [
      {
        id: 1,
        title: 'NestJS + GraphQL',
        content: 'This is an awesome article about NestJS and GraphQL',
        category: 'Technology',
      },
    ];
  }
}
