import styles from './layout.module.scss';
import BottomNavMenu from '@/app/(main)/_components/BottomNavMenu';
import React, { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className={styles.layoutChild}>{children}</div>
      <BottomNavMenu />
    </>
  );
}
