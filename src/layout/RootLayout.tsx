import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";

const RootLayout = () => {
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
         <Box sx={{ flex: 2 }}>
            <Outlet />
         </Box>
         <Box sx={{ flex: 1.5, borderLeft: "1px solid gray" }}>
            <Box />
         </Box>
      </Box>
   );
};

export default RootLayout;
