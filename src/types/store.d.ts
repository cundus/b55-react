export interface IStoreStates {
   user: IUser;
   isLogin: boolean;
   posts: any[];
}

export interface IStoreActions {
   setUser: (user: IUser) => void;
   clearUser: () => void;
   getPosts: () => Promise<void>;
}

export interface IUser {
   profile?: IProfile;
   username: string;
   email: string;
   fullName: string;
}

export interface IProfile {
   avatar: string;
   banner: string;
   bio: string;
}

type TTest = () => void;
type TTest2 = string;

interface ITest {
   test: TTest;
}

export type TStore = IStoreStates & IStoreActions;
