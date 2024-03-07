import Image from "next/image";
import backgroundImage from "@/assets/images/background.png";
import React from "react";
import style from "./layout.module.scss";
import './global.css'

export const metadata = {
  title: '마쉬멜로우',
  description: '마쉬멜로우 사이트',
}

type Props = {
  children: React.ReactNode,
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body>
        <div className={style.layout}>
          <div className={style.layout__bg}>
            <Image src={backgroundImage} alt="" />
          </div>
          <div className={style.layout__menu}></div>
          <div className={style.layout__content}>
            <div className={style.layout__contentMain}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
