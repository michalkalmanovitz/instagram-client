import { createBrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "./routes";
import PageContainer from "../../components/layout/pageContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    children: APP_ROUTES.map((route) => ({
      path: route.path === "/" ? "" : route.path.slice(1),
      element: route.element,
    })),
  },
]);
