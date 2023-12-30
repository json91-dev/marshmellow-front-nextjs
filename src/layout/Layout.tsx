// components/Layout.js
import React from "react";
import styles from "@/styles/layout/MainLayout.module.scss";
import backgroundImage from "@/assets/images/background.png";
import Image from "next/image";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.mainLayout}>
        <div className="main-layout__bg-img">
          <Image src={backgroundImage} alt="" />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
