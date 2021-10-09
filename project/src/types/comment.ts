import { AuthInfo } from './auth-info';

export type Comment = {
  id: string;
  comment: string;
  date: Date;
  rating: number;
  user: AuthInfo;
};
