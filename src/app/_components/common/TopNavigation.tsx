'use client';

import style from './topNavigation.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  title?: string;
  isTitleExist?: boolean;
};

export default function TopNavigation({ title = '', isTitleExist = true }: Props) {
  const router = useRouter();
  return (
    <div className={style.container}>
      <div className={style.leftIcon} onClick={() => router.back()}>
        <Image src="/images/arrow.left.svg" alt="No Image" fill objectFit="contain" />
      </div>
      {title ? <p>{title}</p> : <p></p>}
      <div className={style.leftIcon}></div>
    </div>
  );
}
