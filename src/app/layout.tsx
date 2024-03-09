import React from 'react';
import style from './layout.module.scss';
import './global.css';
import { useMediaQuery } from 'react-responsive';

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
          <div className={style.leftContent}>asdfasdf</div>
          <div className={style.content}>{children}</div>
          <div className={style.rightContent}></div>
        </div>
      </body>
    </html>
  );
}
