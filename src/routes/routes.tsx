import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import TestPage from "../pages/TestPage/TestPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
            path: "profile/:user_id",
            element: <ProfilePage />,
         },
         {
            path: "detail/:id",
            element: <Detail />,
         },
         {
            path: "test",
            element: <TestPage />,
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
