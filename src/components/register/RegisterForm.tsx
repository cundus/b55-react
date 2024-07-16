import { Button, Input, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Icon } from "@iconify/react";

const RegisterForm = () => {
   return (
      <form
         style={{
            width: "30rem",
            display: "flex",
            flexDirection: "column",
            gap: 10,
         }}
      >
         <Typography variant="h3" fontWeight={"bold"} color="green">
            Circle
         </Typography>
         <Typography variant="h4" fontWeight={"bold"} color="white">
            Create account Circle
         </Typography>
         <CustomInput placeholder="Fullname" sx={{ mb: 2 }} />
         <CustomInput placeholder="Email" />
         <CustomInput placeholder="Password" />
         <Button variant="contained" color="success" sx={{ borderRadius: 23 }}>
            Create
         </Button>

         <Typography variant="body2" color="white">
            Already have account? <span style={{ color: "green" }}>Login</span>
         </Typography>
      </form>
   );
};

export default RegisterForm;
