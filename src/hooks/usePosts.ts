import { useSimpleQuery } from "./core/useSimpleQuery";
import { NewPostType, PostType } from "../types/post";
import { useSimpleMutation } from "./core/useSimpleMutation";
import { useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../config/queries/axiosInstance";

type LikePayload = {
  postId: string;
  username: string;
};

export const usePosts = () => {
  const posts = useSimpleQuery<PostType[]>(`/posts`, ["posts"]);

  return posts;
};

export const useUserPosts = (username?: string) => {
  return useSimpleQuery<PostType[]>(`/posts/user/${username}`, [
    "posts",
    username ?? "",
  ]);
};
export const useCreatePost = () => {
  return useSimpleMutation<NewPostType>("/posts/new", "POST");
};

export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useSimpleMutation<LikePayload>(`/posts/like`, "PATCH", {
    mutationFn: ({ postId, username }) =>
      axiosInstance.patch(`/posts/${postId}/user/${username}/like`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useDislikePost = () => {
  const queryClient = useQueryClient();

  return useSimpleMutation<LikePayload>(`/posts/dislike`, "PATCH", {
    mutationFn: ({ postId, username }) =>
      axiosInstance.patch(`/posts/${postId}/user/${username}/dislike`),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
