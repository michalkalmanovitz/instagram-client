import { Box } from "@mui/material";
import "./pageContainer.css";
import { Outlet, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../config/router/routes";

const PageContainer = () => {
  const location = useLocation();


  const currentRoute = APP_ROUTES.find(
    (route) => route.path === location.pathname,
  );

  return (
    <Box className="app-wrapper">
      <Box className="app-container">
        <div id="header">
          <h1>{currentRoute?.title}</h1>
        </div>

        <div id="content">
          <Outlet />
        </div>

        <div className="bottom-nav">
          {APP_ROUTES.map((route) => (
            <a key={route.path} href={route.path}>
              {route.icon}
            </a>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default PageContainer;
