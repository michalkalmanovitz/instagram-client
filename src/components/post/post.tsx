import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import "./post.css";
import { PostType } from "../../types/post";
import { Card, CardHeader } from "@mui/material";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import LikeBtn from "./like/like";
import { parseDate } from "../../utilities/date";

type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {
 
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile", {
      state: {
        sentUser: post.user,
      },
    });
  };

  return (
    <Card id="post" key={post.id}>
      <button id="cardHeader" onClick={goToProfile}>
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
      </button>

      <CardMedia
        component="img"
        height="350"
        sx={{ objectFit: "contain" }}
        image={post.photoSrc}
      />

      <CardActions disableSpacing>
        <LikeBtn post={post} />
        <span className="likeCount">{post.likesCount} likes</span>
      </CardActions>
    </Card>
  );
};
export default Post;
