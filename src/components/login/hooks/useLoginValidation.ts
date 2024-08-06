import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginForm } from "../../../types/login";

export const useLoginValidation = () => {
   const schema = yup.object().shape({
      username: yup.string().required("username is required"),
      password: yup
         .string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters"),
   });

   return useForm<ILoginForm>({
      resolver: yupResolver(schema),
      defaultValues: {
         username: "",
         password: "",
      },
      reValidateMode: "onSubmit",
      mode: "all",
   });
};
