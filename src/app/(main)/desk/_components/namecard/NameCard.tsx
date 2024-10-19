'use client';

import React, { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import NameCardEmploy from '@/app/(main)/desk/_components/namecard/NameCardEmploy';
import NameCardIntern from '@/app/(main)/desk/_components/namecard/NameCardIntern';
import PassCard from '@/app/(main)/desk/_components/namecard/PassCard';
import { useRouter } from 'next/navigation';
import useMemberProfile from '@/api/queries/member/useMemberProfile';

export default function NameCard() {
  const { data: session, status: sessionStatus } = useSession();
  const { data: result, status } = useMemberProfile();
  console.log(result?.data.grade);

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      const type = session.type;
      console.log('현재 상태 : ' + type);
      if (!type) {
        console.log('타입이 존재하지 않습니다. (로그인 실패)');
        return;
      }
    } else {
      console.log(status);
    }
  }, [status, session]);

  if (sessionStatus === 'unauthenticated') {
    return <PassCard />;
  }

  if (status === 'pending' || sessionStatus === 'loading') {
    return null;
  }

  if (result?.data === null) {
    return <PassCard />;
  }

  if (result?.data.grade === '인턴') {
    return <NameCardIntern />;
  } else {
    return <NameCardEmploy />;
  }
}
