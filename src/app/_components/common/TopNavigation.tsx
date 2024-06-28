'use client';

import style from './topNavigation.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useModalStore } from '@/store/modal';

type Props = {
  title?: string;
  path?: string;
};

export default function TopNavigation({ title = '', path = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { showAddressChangeQuitModal, showQuitInfoModal } = useModalStore();

  const onClickBackButton = useCallback(() => {
    // 경로 입력시 해당 경로로 replace
    if (path) {
      router.replace(path);
      return;
    }

    // 바로 경로 입력 안하고 모달창 처리해야하는 경우
    if (pathname === '/my/address/add' || pathname === '/my/address/edit') {
      showAddressChangeQuitModal(true);
      return;
    }

    if (pathname === '/signup/info') {
      showQuitInfoModal(true);
      return;
    }

    router.back();
  }, [pathname, path]);

  return (
    <div className={style.container}>
      <div className={style.leftIcon} onClick={onClickBackButton}>
        <Image src="/images/arrow.left.svg" alt="No Image" width={24} height={24} />
      </div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={style.leftIcon}></div>
    </div>
  );
}
