import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes: RouteObject[] = [
   {
      path: "/",
      element: <RootLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "search",
            element: <>About</>,
         },
         {
            path: "follows",
            element: <>About</>,
         },
         {
            path: "profile",
            element: <>Profile</>,
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: [
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "login",
            element: <Login />,
         },
      ],
   },
];

export default routes;
