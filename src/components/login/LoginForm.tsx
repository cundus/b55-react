import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { ILoginForm } from "../../types/login";
import CustomInput from "../common/Input";
import { useLoginFunction } from "./hooks/useLoginFunction";
import { useLoginValidation } from "./hooks/useLoginValidation";

const LoginForm = () => {
   const { handleLogin } = useLoginFunction();
   const { control, handleSubmit, reset, watch } = useLoginValidation();

   const onSubmit = async (data: ILoginForm) => {
      await handleLogin(data);
      reset();
   };

   const onError = (errors: any) => {
      console.log(errors);
   };

   return (
      <form
         style={{
            width: "30rem",
            display: "flex",
            flexDirection: "column",
            gap: 10,
         }}
         onSubmit={handleSubmit(onSubmit, onError)}
      >
         <Typography variant="h3" fontWeight={"bold"} color="green">
            Circle
         </Typography>
         <Typography variant="h4" fontWeight={"bold"} color="white">
            Create account Circle
         </Typography>

         <Controller
            control={control}
            name="username"
            render={({ field, fieldState }) => (
               <FormControl error={Boolean(fieldState.error)}>
                  <CustomInput
                     placeholder="Email or Username"
                     sx={{ mb: 2 }}
                     {...field}
                  />
                  {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
               </FormControl>
            )}
         />

         <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
               <FormControl error={Boolean(fieldState.error)}>
                  <CustomInput
                     placeholder="Password"
                     type="password"
                     sx={{ mb: 2 }}
                     {...field}
                  />
                  {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
               </FormControl>
            )}
         />

         <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ borderRadius: 23 }}
         >
            Login
         </Button>

         <Typography variant="body2" color="white">
            Already have account?{" "}
            <span style={{ color: "green" }}>Register</span>
         </Typography>
      </form>
   );
};

export default LoginForm;
