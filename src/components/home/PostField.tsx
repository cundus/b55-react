import { Avatar, Button, Input, Stack } from "@mui/material";
import React from "react";
import { usePostFunction } from "./hooks/usePostFunction";

const PostField = () => {
   const { handlePost } = usePostFunction();
   const [content, setContent] = React.useState("");

   return (
      <form
         onSubmit={(e) => {
            e.preventDefault();
            handlePost(content);
            setContent("");
         }}
      >
         <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
            <Input
               placeholder="What's on your mind?"
               disableUnderline
               fullWidth
               value={content}
               onChange={(e) => setContent(e.target.value)}
            />
            <label htmlFor="upload">Upload</label>
            <input type="file" id="upload" hidden />
            <Button variant="contained" color="success" type="submit">
               Post
            </Button>
         </Stack>
      </form>
   );
};

export default PostField;
