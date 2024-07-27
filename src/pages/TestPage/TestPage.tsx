import React, { FC } from "react";
import styles from "./TestPage.module.css";

interface TestPageProps {}

const TestPage: FC<TestPageProps> = () => (
   <div className={styles.container}>TestPage Component</div>
);

export default TestPage;
