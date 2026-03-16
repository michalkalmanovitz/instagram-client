import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./post.css";
const Post = () => {
  return (
    <>
      <Card id="post">
        <CardHeader
          avatar={<Avatar alt="avatar" src="" sx={{ width: 30, height: 30 }} />}
          title="username"
          subheader="created at"
        />
        <CardMedia
          component="img"
          height="350hv"
          sx={{
            objectFit: "contain",
          }}
          image=""
          alt="photo src"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <span className="likeCount">100 likes</span>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
