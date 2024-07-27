import React, { FC } from "react";
import styles from "./ProfilePage.module.css";
import { useParams } from "react-router-dom";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
   const { user_id } = useParams();

   return <div className={styles.ProfilePage}>ProfilePage : {user_id}</div>;
};

export default ProfilePage;
