import { FaHouse, FaCirclePlus } from "react-icons/fa6";
import { Avatar } from "@mui/material";
import HomePage from "../../features/homepage/homepage";
import CreatePost from "../../features/createPost/createPost";
import Profile from "../../features/profile/profile";
import { AppRoute } from "./types";

export const APP_ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    icon: <FaHouse />,
    title: "Home",
  },
  {
    path: "/create-post",
    element: <CreatePost />,
    icon: <FaCirclePlus />,
    title: "Create Post",

  },
  {
    path: "/profile",
    element: <Profile />,
    icon: <Avatar alt="avatar" src="" sx={{ width: 20, height: 20 }} />,
    title: "Profile",
  },
];
