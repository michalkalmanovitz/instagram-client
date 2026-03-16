import { User } from "./user";

export type Post = NewPost & {
  id: string;
};

export type NewPost = {
  createdAt: Date;
  photoSrc: string;
  likes: number;
  user: User;
};
