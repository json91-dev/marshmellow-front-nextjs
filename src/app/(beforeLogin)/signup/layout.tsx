import style from './signupLayout.module.scss';
import React from 'react';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';

type Props = {
  children: React.ReactNode;
};

export default function SignUpLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <div>하이</div>
      <div>{children}</div>
    </div>
  );
}
