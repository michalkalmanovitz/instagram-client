import Avatar from "@mui/material/Avatar";
import Scroll from "../../components/Scroll/Scroll";
import "./profile.css";
import { useUserPosts } from "../../hooks/usePosts";
import { useUser } from "../../hooks/useUser";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa6";

const Profile = () => {
  const { data: currUser } = useUser();

  const location = useLocation();
  const { sentUser } = location.state || {};
  window.history.replaceState({}, "");

  const activeUser = sentUser ?? currUser;

  const { data: posts = [] } = useUserPosts(activeUser?.name);

  if (!activeUser) return null;

  return (
    <>
      {sentUser ? (
        <Button onClick={() => window.history.back()} id="back-button">
          <FaAngleLeft />
        </Button>
      ) : (
        <></>
      )}
      <div id="data">
        <Avatar
          alt="avatar"
          src={activeUser.avatarSrc}
          sx={{ width: 60, height: 60 }}
        />
        <p>{activeUser.name}</p>
      </div>

      <Scroll posts={posts} />
    </>
  );
};

export default Profile;
