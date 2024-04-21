import style from './signupLayout.module.scss';
import React, { ReactNode } from 'react';

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
