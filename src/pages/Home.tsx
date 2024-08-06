import { Avatar, Box, Button, Input, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PostField from "../components/home/PostField";
import PostList from "../components/home/PostList";

const dummy = [
   {
      id: 1,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 2,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 3,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 4,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 5,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 6,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
];

const Home = () => {
   const navigate = useNavigate();

   return (
      <div>
         <h1>Home</h1>
         <PostField />
         <PostList />
      </div>
   );
};

export default Home;
