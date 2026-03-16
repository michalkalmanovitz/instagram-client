import { Button } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa6";
import "./createPost.css";

const CreatePost = () => {
  return (
    <>
      <Button onClick={() => window.history.back()} id="back-button">
        <FaAngleLeft />
      </Button>

      <div className="createPostContainer">
        <div className="createPostCard">
          <input
            placeholder="Photo URL"
            type="text"
            id="photo_src"
            className="createPostInput"
          />
          <label className="createPostTitle">Create a new post</label>

          <button className="createPostButton">Post</button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
