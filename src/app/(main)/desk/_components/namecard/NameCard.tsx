'use client';

import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import NameCardEmploy from '@/app/(main)/desk/_components/namecard/NameCardEmploy';
import NameCardIntern from '@/app/(main)/desk/_components/namecard/NameCardIntern';
import PassCard from '@/app/(main)/desk/_components/namecard/PassCard';
import Spinner from '@/app/login/_components/Spinner';
import useMemberProfile from '@/app/_hook/queries/useMemberProfile';

export default function NameCard() {
  const { status: sessionStatus } = useSession();
  const { data: result, status } = useMemberProfile();

  if (sessionStatus === 'unauthenticated') {
    return <PassCard />;
  }

  if (status === 'pending' || sessionStatus === 'loading') {
    return <Spinner />;
  }

  if (result.data.grade === '인턴') {
    return <NameCardIntern />;
  } else {
    return <NameCardEmploy />;
  }
}
