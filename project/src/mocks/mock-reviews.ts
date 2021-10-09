import { Comment } from '../types/comment';

export const reviews: Comment[] = [
  {
    id: '1',
    comment: 'comment 1',
    date: new Date(),
    rating: 4.3,
    user: {
      id: 'user_1',
      avatarUrl: 'img/avatar-max.jpg',
      email: 'test@test.test',
      isPro: false,
      name: 'Max',
      token: '',
    },
  },
  {
    id: '2',
    comment: 'comment 2',
    date: new Date(),
    rating: 4,
    user: {
      id: 'user_2',
      avatarUrl: 'img/avatar-max.jpg',
      email: 'test@test2.test',
      isPro: false,
      name: 'Max2',
      token: '',
    },
  },
  {
    id: '3',
    comment: 'comment 3',
    date: new Date(),
    rating: 3.3,
    user: {
      id: 'user_3',
      avatarUrl: 'img/avatar-max.jpg',
      email: 'test@test3.test',
      isPro: false,
      name: 'Max3',
      token: '',
    },
  },
  {
    id: '4',
    comment: 'comment 4',
    date: new Date(),
    rating: 2.3,
    user: {
      id: 'user_4',
      avatarUrl: 'img/avatar-max.jpg',
      email: 'test@test4.test',
      isPro: true,
      name: 'Max4',
      token: '',
    },
  },
];
