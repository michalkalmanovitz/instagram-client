import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./post.css";
import { PostType } from "../../types/post";
import { Card, CardHeader } from "@mui/material";
import { useDislikePost, useLikePost } from "../../hooks/usePosts";
import { useUser } from "../../hooks/useUser";

type PostProps = {
  post: PostType;
};

const parseDate = (date: Date) => {
  const newDate = new Date(date);
  return newDate.toISOString().split("T")[0];
};

const Post = ({ post }: PostProps) => {
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
    <Card id="post">
      <CardHeader
        avatar={
          <Avatar
            alt="avatar"
            src={post.user.avatarSrc}
            sx={{ width: 30, height: 30 }}
          />
        }
        title={post.user.name}
        subheader={parseDate(post.createdAt)}
      />

      <CardMedia
        component="img"
        height="350"
        sx={{ objectFit: "contain" }}
        image={post.photoSrc}
      />

      <CardActions disableSpacing>
        {isLiked ? (
          <IconButton onClick={handleDisLike}>
            <FavoriteIcon color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={handleLike}>
            <FavoriteIcon />
          </IconButton>
        )}

        <span className="likeCount">{post.likesCount} likes</span>
      </CardActions>
    </Card>
  );
};
export default Post;
