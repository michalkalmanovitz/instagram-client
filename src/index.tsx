import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import "./index.scss";
import AuthWrapper from "./config/msal/AuthWrapper";
import queryClient from "./config/queries/queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthWrapper>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthWrapper>
  </React.StrictMode>,
);
