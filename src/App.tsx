import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { api, setAuthToken } from "./lib/api";
import routes from "./routes/routes";
import useStore from "./stores/hooks";

function App() {
   const { setUser } = useStore();
   async function checkAuth() {
      const token = localStorage.getItem("token");

      if (!token) {
         return;
      }

      try {
         const response = await api.get("/auth/me", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setUser(response.data.data);
         setAuthToken(token);
      } catch (error) {
         console.log(error);
         setAuthToken();
      }
   }

   useEffect(() => {
      checkAuth();
   }, []);

   return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
