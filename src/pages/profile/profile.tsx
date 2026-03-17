import Avatar from "@mui/material/Avatar";
import Scroll from "../../components/Scroll/Scroll";
import "./profile.css";
import { useUserPosts } from "../../hooks/usePosts";
import { useUser } from "../../hooks/useUser";
import { UserType } from "../../types/user";

interface ProfileProps {
  user?: UserType;
}

const Profile = ({ user }: ProfileProps) => {
  const { data: currUser } = useUser();

  const activeUser = user ?? currUser;

  const { data: posts = [] } = useUserPosts(activeUser?.name);

  if (!activeUser) return null;

  return (
    <>
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
