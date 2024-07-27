import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import useStore from "../../stores/hooks";

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = () => {
   const { user_id } = useParams();
   const { user } = useStore();

   if (user_id === user.username) {
      return null;
   }

   return (
      <Box sx={{ width: "full", height: 200, bgcolor: "gray" }}>
         hello world
      </Box>
   );
};

export default ProfileCard;
