import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { FaHouse, FaCirclePlus } from "react-icons/fa6";

import "./app.css";

const App = () => {
  return (
    <>
      <div id="header">
        <h1>Home</h1>
      </div>

      <BottomNavigation
        showLabels={true}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction icon={<FaHouse />} />
        <BottomNavigationAction icon={<FaCirclePlus />} />
        <BottomNavigationAction
          icon={<Avatar alt="avatar" src="" sx={{ width: 20, height: 20 }} />}
        />
      </BottomNavigation>
    </>
  );
};

export default App;
