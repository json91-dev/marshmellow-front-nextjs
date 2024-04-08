'use client'

import style from './ticketLink.module.scss';
import Image from 'next/image';
import React from 'react';
import {useRouter} from "next/navigation";

export default function TicketLinks() {
  const router= useRouter()

  return (
    <div className={style.container}>
      <div className={style.link}>
        <div>
          <Image src="/images/mallow.snack.svg" alt="No Image" width={26} height={26} />
          <div>마시멜로우</div>
        </div>
        <div onClick={() => router.push('/my/mallow')}>
          <div>324개</div>
          <div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={26} height={26} />
          </div>
        </div>
      </div>
    </div>
  );
}
