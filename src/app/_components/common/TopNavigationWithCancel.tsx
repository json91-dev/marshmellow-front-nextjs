'use client';

import style from './topNavigationWithCancel.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useMemberMeQuery } from '@/app/_hook/queries/member';

type Props = {
  title?: string;
  path?: string;
};

export default function TopNavigationWithCancel({ title = '', path = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: result } = useMemberMeQuery();

  return (
    <div className={style.topNavigation}>
      <div className={style.leftIcon}></div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={style.rightCancel} onClick={() => router.back()}>
        <Image src="/images/x.cancel.black.svg" alt="No Image" width={24} height={24} />
      </div>
    </div>
  );
}
