import { useLikePost, useDislikePost } from "../../../hooks/usePosts";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../hooks/useUser";
import { PostType } from "../../../types/post";


type LikeBtnProps = {
  post: PostType;
};

const LikeBtn = ({ post }: LikeBtnProps) => {
    const { data: currUser } = useUser();

    const isLiked =
        currUser && post.likedBy.some((user) => user.name === currUser.name);

  const likePost = useLikePost();
  const dislikePost = useDislikePost();

  const handleLike = () => {
    if (!currUser?.name) return;

    likePost.mutate({
      postId: post.id,
      username: currUser.name,
    });
  };

  const handleDisLike = () => {
    if (!currUser?.name) return;

    dislikePost.mutate({
      postId: post.id,
      username: currUser.name,
    });
  };

  return (
    <>
        {isLiked ? (
            <IconButton onClick={handleDisLike}>
            <FavoriteIcon color="error" />
            </IconButton>
            ) : (
            <IconButton onClick={handleLike}>
            <FavoriteIcon />
            </IconButton>
        )}
    </>
  )
}
export default LikeBtn;