'use client';

import style from './options.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Options() {
  const router = useRouter();
  return (
    <div className={style.options}>
      <div className={style.image}>
        <Image src="/images/notice.svg" alt="No Image" width={24} height={24} />
      </div>
      <div className={style.image} onClick={() => router.push('/my')}>
        <Image src="/images/setting.svg" width={24} height={24} alt={'No Image'} />
      </div>
    </div>
  );
}
