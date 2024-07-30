import React, { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
  modal: ReactNode;
};

export default function MyPageLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
