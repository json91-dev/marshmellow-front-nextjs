'use client';
import style from './address.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
export default function () {
  const router = useRouter();
  return <div className={style.luckyDrawPrizeAddressPage}></div>;
}
