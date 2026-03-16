import Avatar from "@mui/material/Avatar";
import Scroll from "../../components/Scroll/Scroll";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div id="data">
        <Avatar alt="avatar" src="" sx={{ width: 60, height: 60 }} />
        <p>username</p>
      </div>
      <Scroll />
    </>
  );
};

export default Profile;
