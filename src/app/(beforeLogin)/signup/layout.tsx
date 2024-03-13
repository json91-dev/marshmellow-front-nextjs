import style from './signupLayout.module.scss';
import React from 'react';
import TopNavigation from '@/app/(beforeLogin)/signup/_components/TopNavigation';

type Props = {
  children: React.ReactNode;
};

export default function SignUpLayout({ children }: Props) {
  return (
    <>
      <TopNavigation />
      <div className={style.container}>{children}</div>
    </>
  );
}
