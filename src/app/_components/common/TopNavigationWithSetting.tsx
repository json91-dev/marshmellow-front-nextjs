'use client';

import style from './topNavigationWithSetting.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useMemberMeQuery } from '@/app/_hook/queries/member';

type Props = {
  title?: string;
  path?: string;
};

export default function TopNavigationWithSetting({ title = '', path = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: result } = useMemberMeQuery();

  const onClickBackButton = useCallback(() => {
    // 경로 입력시 해당 경로로 replace
    if (path) {
      router.replace(path);
      return;
    }

    router.back();
  }, [pathname, path]);

  return (
    <div className={style.topNavigation}>
      <div className={style.leftIcon} onClick={onClickBackButton}>
        <Image src="/images/arrow.left.svg" alt="No Image" width={24} height={24} />
      </div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={style.rightSetting} onClick={() => router.push('/my/alarm/setting')}>
        <Image src="/images/setting.svg" alt="No Image" width={24} height={24} />
      </div>
    </div>
  );
}
