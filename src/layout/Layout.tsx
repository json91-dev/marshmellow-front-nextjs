// components/Layout.js
import React from "react";
import styles from "@/styles/layout/Layout.module.scss";
import backgroundImage from "@/assets/images/background.png";
import Image from "next/image";

const Layout = ({ children }: any) => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__bg"]}>
        <Image src={backgroundImage} alt="" />
      </div>
      <div className={styles["layout__menu"]}></div>
      <div className={styles["layout__content"]}>
        <div className={styles["layout__content-main"]}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
