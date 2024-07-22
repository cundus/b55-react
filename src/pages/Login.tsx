import { useNavigate } from "react-router-dom";
import useStore from "../stores/hooks";

const Login = () => {
   // const navigate = useNavigate();

   const { setUser } = useStore();

   return (
      <div>
         <h1>Login</h1>
         <button
            type="button"
            onClick={() =>
               setUser({
                  username: "admin",
                  email: "admin",
                  fullName: "admin",
               })
            }
         >
            LOGIN
         </button>
      </div>
   );
};

export default Login;
