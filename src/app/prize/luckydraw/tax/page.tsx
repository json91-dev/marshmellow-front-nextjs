'use client';
import style from './tax.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
export default function () {
  const router = useRouter();
  return <div className={style.luckyDrawPrizeTaxPage}></div>;
}
