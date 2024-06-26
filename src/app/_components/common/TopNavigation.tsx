'use client';

import style from './topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useModalStore } from '@/store/modal';

type Props = {
  title?: string;
};

export default function TopNavigation({ title = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { showAddressChangeQuitModal, showQuitInfoModal } = useModalStore();

  const onClickBackButton = () => {
    if (pathname === '/my/address/add' || pathname === '/my/address/edit') {
      showAddressChangeQuitModal(true);
      return;
    }

    if (pathname === '/signup/info') {
      showQuitInfoModal(true);
      return;
    }

    router.back();
  };

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
