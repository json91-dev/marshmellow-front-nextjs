'use client';

import styles from './topNavigation.module.scss';
import Image from 'next/image';
import React, { Suspense, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useModalStore from '@/store/modalStore';

type Props = {
  title?: string;
  path?: string;
};

export default function ({ title = '', path = '' }) {
  return (
    <Suspense>
      <TopNavigation title={title} path={path} />
    </Suspense>
  );
}

function TopNavigation({ title = '', path = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { showAddressChangeQuitModal, showQuitInfoModal, showPrizeLuckyDrawTaxInfoCancel } = useModalStore();

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

    if (pathname === '/prize/luckydraw/tax/info') {
      console.log('와우 ');

      const steps = ['2', '3', '4', '5'];
      const paramsStep = searchParams.get('step');
      if (paramsStep && steps.includes(paramsStep)) {
        showPrizeLuckyDrawTaxInfoCancel(true);
        return;
      }
    }

    router.back();
  }, [pathname, path]);

  return (
    <div className={styles.topNavigation}>
      <div className={styles.leftIcon} onClick={onClickBackButton}>
        <Image src="/images/arrow.left.svg" alt="No Image" width={24} height={24} />
      </div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={styles.empty}></div>
    </div>
  );
}
