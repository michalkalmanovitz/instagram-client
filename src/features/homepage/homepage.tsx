import Scroll from "../../components/Scroll/Scroll";
import { usePosts } from "../../hooks/usePosts";
import "./HomePage.css";

const HomePage = () => {
  const { data: posts = [] } = usePosts();
  return (
    <>
      <Scroll posts={posts} />
    </>
  );
};

export default HomePage;
