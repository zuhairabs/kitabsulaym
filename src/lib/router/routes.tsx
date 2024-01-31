import React from "react";
import type { PathRouteProps } from "react-router-dom";

import Hadith from "~/lib/pages/hadith";

const Home = React.lazy(() => import("~/lib/pages/home"));

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hadith/:id",
    element: <Hadith />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
