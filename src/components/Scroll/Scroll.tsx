import Post from "../post/post.tsx";
import { PostType } from "../../types/post";
import "./Scroll.css";

interface scrollProps {
  posts: PostType[];
}

const Scroll = ({ posts }: scrollProps) => {
  return (
    <>
      <div id="scroll">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
};

export default Scroll;
