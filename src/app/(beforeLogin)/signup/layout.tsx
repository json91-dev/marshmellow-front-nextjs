import style from './signupLayout.module.scss';
import React from 'react';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import TopNavigation from '@/app/(beforeLogin)/signup/_components/TopNavigation';

type Props = {
  children: React.ReactNode;
};

export default function SignUpLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <TopNavigation />
      {children}
    </div>
  );
}
