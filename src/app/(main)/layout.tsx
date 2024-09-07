import styles from './layout.module.scss';
import BottomNavMenu from '@/app/(main)/_components/BottomNavMenu';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  const session = await getServerSession(authOptions);

  const response = await fetch(`${process.env.API_URL}/onboarding/status`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  /** onboarding 미션을 완료하지 않았을때, 온보딩 페이지로 이동 **/
  if (response.ok) {
    const result = await response.json();
    const { onboardingComplete } = result.data;

    if (!onboardingComplete) {
      console.log('리다이렉트');
      return redirect('/onboarding/worktime-setting');
    }
  }

  return (
    <>
      <div className={styles.layoutChild}>{children}</div>
      <BottomNavMenu />
    </>
  );
}
