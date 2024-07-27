import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";
import useStore from "../stores/hooks";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const RootLayout = () => {
   const { isLogin, user } = useStore();

   if (!isLogin) {
      return <Navigate to="/auth/login" />;
   }

   return (
      <Box sx={{ height: "100vh", display: "flex" }}>
         {/* Sidebar */}
         <Box
            sx={{
               flex: 1,
               backgroundColor: "#1D1D1D",
               borderRight: "1px solid gray",
            }}
         >
            <Sidebar />
         </Box>
         <Box sx={{ flex: 2, overflow: "auto" }}>
            <Outlet />
         </Box>
         <Box sx={{ flex: 1.5, borderLeft: "1px solid gray" }}>
            <ProfileCard />
         </Box>
      </Box>
   );
};

export default RootLayout;
