import { createContext, useState } from "react";
import { IUser, TStore } from "../types/store";
import { api } from "../lib/api";

interface StoreProps {
   children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

// buat store provider untuk menyediakan data store di semua komponen
export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
   //    // ini state
   //    const [count, setCount] = useState(0);

   //    // ini action
   //    const increment = () => setCount(count + 1);
   //    const decrement = () => setCount(count - 1);

   const [user, setUserState] = useState<IUser>({
      email: "",
      fullName: "",
      username: "",
   });
   const [isLogin, setIsLogin] = useState(false);
   const [posts, setPosts] = useState([]);

   const setUser = (user: IUser) => {
      setUserState(user);
      setIsLogin(true);
   };

   const clearUser = () => {
      setUserState({
         email: "",
         fullName: "",
         username: "",
      });
      localStorage.removeItem("token");
      setIsLogin(false);
   };

   const getPosts = async () => {
      try {
         const res = await api.get("/posts");

         setPosts(res.data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Store.Provider
         value={{
            user,
            isLogin,
            setUser,
            clearUser,
            getPosts,
            posts,
         }}
      >
         {children}
      </Store.Provider>
   );
};
