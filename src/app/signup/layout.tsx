import style from './signupLayout.module.scss';
import React, { ReactNode } from 'react';

import TopNavigation from '@/app/signup/_components/TopNavigation';
import Toast from '@/app/signup/_components/Toast';

type Props = {
  children: React.ReactNode;
  modal: ReactNode;
};

export default function SignUpLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      <div className={style.layoutChild}>{children}</div>
    </>
  );
}
