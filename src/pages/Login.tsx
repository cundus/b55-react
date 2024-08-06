import { Box } from "@mui/material";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#1D1D1D",
         }}
      >
         <LoginForm />
      </Box>
   );
};

export default Login;
