import React, { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
  modal: ReactNode;
};

export default function AttendancePageLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
