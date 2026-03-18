import { UserType } from "./user";

export type PostType = {
  id: string;
  userLiked: boolean;
  likesCount: number;
  createdAt: Date;
  photoSrc: string;
  user: UserType;
  likedBy: UserType[];
};

export type NewPostType = {
  photoSrc: string;
  userName: string;
};
