'use client';

import styles from './topNavigationWithMallow.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useModalStore from '@/store/modalStore';
import useMemberMe from '@/api/queries/member/useMemberMe';

type Props = {
  title?: string;
  path?: string;
};

export default function TopNavigationWithMallow({ title = '', path = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { showAddressChangeQuitModal, showQuitInfoModal } = useModalStore();
  const { data: result } = useMemberMe();

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
    <div className={styles.topNavigation}>
      <div className={styles.leftIcon} onClick={onClickBackButton}>
        <Image src="/images/arrow.left.svg" alt="No Image" width={24} height={24} />
      </div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={styles.rightMallow}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>{result?.data?.currency?.marshmallowQuantity ? result?.data?.currency?.marshmallowQuantity : '0'}</p>
      </div>
    </div>
  );
}
