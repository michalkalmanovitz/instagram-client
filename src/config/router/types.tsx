import { JSX } from "react";

export type AppRoute = {
  path: string;
  element: JSX.Element;
  icon: JSX.Element;
  title: string;
};