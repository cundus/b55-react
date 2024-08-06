import { toast } from "react-toastify";
import { api, setAuthToken } from "../../../lib/api";
import useStore from "../../../stores/hooks";

export const useLoginFunction = () => {
   const { setUser } = useStore();

   const handleLogin = async (data: any) => {
      try {
         const response = await api.post("/auth/login", data);

         const token = response.data.token;

         const user = await api.get("/auth/me", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setUser(user.data.data);
         localStorage.setItem("token", token);
         setAuthToken(token);
         toast.success("Login Success");
      } catch (error) {
         console.log(error);
         toast.error("Login Failed");
      }
   };

   return { handleLogin };
};
