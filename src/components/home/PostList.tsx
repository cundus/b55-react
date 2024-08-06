import React from "react";
import { Box } from "@mui/material";
import useStore from "../../stores/hooks";

const PostList = () => {
   const { getPosts, posts } = useStore();

   React.useEffect(() => {
      getPosts();
   }, []);

   return (
      <Box>
         {posts.map((post: any) => (
            <div key={post.id}>{post.content}</div>
         ))}
      </Box>
   );
};

export default PostList;
