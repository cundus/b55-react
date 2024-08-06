import { toast } from "react-toastify";
import { api } from "../../../lib/api";
import React from "react";
import useStore from "../../../stores/hooks";

export const usePostFunction = () => {
   const { getPosts } = useStore();
   const handlePost = async (content: string) => {
      try {
         const res = await api.post("/posts", {
            content,
         });
         await getPosts();

         toast.success("Post Success");
      } catch (error) {
         console.log(error);
         toast.error("Post Failed");
      }
   };

   return { handlePost };
};
