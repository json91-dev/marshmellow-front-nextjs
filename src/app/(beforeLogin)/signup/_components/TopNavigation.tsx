'use client';

import style from './topNavigation.module.scss';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { browserPreventEvent } from '@/utils/utils';

export default function TopNavigation() {
  const pathname = usePathname();

  /** 안드로이드는 두번 백버튼 눌렀을때 꺼져버림. **/
  /** 생각보다 모바일 백버튼 제어가 까다로울수 있는 부분. 우선순위는 뒤로 할것. **/
  // const handleBackButtonClicked = useCallback(() => {
  //   history.pushState(null, '', location.href);
  //   console.log('모달 없애는 조건 달기');
  //   if (pathname === '/signup/identify') {
  //     // 기본 Pass 인증 중일 때만 팝업 띄우고, Pass 인증 중이 아닐떄는 그냥 뒤로가기
  //   } else if (pathname === '/signup/info') {
  //   } else if (pathname === '/signup/confirm') {
  //   }
  // }, [pathname]);
  //
  // useEffect(() => {
  //   history.pushState(null, '', location.href);
  //   window.addEventListener('popstate', handleBackButtonClicked);
  //   return () => {
  //     window.removeEventListener('popstate', handleBackButtonClicked);
  //   };
  // }, []);

  return (
    <div className={style.container}>
      <div className={style.leftIcon}>
        {pathname !== '/signup/submit-complete' && (
          <Image src="/images/icon_arrow_left.svg" alt="No Image" fill objectFit="contain" />
        )}
      </div>
      <p>지원하기</p>
      <div className={style.leftIcon}></div>
    </div>
  );
}
