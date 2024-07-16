import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";

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
            path: "about",
            element: <About />,
            children: [
               {
                  path: "company",
                  element: <h1>About Company</h1>,
               },
            ],
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
