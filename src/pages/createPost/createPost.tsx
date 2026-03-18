import { Button } from "@mui/material";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useCreatePost } from "../../hooks/usePosts";
import { useUser } from "../../hooks/useUser";
import "./createPost.css";
import { IoMdCheckmark } from "react-icons/io";

const CreatePost = () => {
  const createPost = useCreatePost();
  const { data: currUser } = useUser();
  const [photoSrc, setPhotoSrc] = useState("");

  const handleSubmit = () => {
    if (!photoSrc || !currUser?.name) return;

    createPost.mutate({
      photoSrc: photoSrc,
      userName: currUser.name,
    });

    window.history.back();
  };
  console.log(currUser);

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
            value={photoSrc}
            onChange={(e) => setPhotoSrc(e.target.value)}
          />
          <label className="createPostTitle">Create a new post</label>
          <button
            className="createPostButton"
            onClick={handleSubmit}
            disabled={!photoSrc || createPost.isPending}
          >
            {createPost.isPending ? <IoMdCheckmark /> : "Post"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
