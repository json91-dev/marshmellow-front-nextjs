import React from 'react';
import style from './layout.module.scss';
import './global.css';
import { useMediaQuery } from 'react-responsive';
import LeftZone from '@/app/_components/LeftZone';

export const metadata = {
  title: '마쉬멜로우',
  description: '마쉬멜로우 사이트',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className={style.rootLayout}>
          <LeftZone />
          <div className={style.content}>{children}</div>
          <div className={style.rightZone}></div>
        </div>
      </body>
    </html>
  );
}
