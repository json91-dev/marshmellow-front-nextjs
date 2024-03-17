import style from './signupLayout.module.scss';
import React, { ReactNode } from 'react';

import TopNavigation from '@/app/(beforeLogin)/signup/_components/TopNavigation';
import Toast from '@/app/(beforeLogin)/signup/_components/Toast';

type Props = {
  children: React.ReactNode;
  modal: ReactNode;
};

export default function SignUpLayout({ children, modal }: Props) {
  return (
    <>
      <TopNavigation />
      {modal}
      <Toast />
      <div className={style.layoutChild}>{children}</div>
    </>
  );
}
