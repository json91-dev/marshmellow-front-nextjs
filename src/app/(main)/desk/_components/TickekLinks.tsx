'use client';

import style from './ticketLink.module.scss';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import useMember from '@/app/_hook/queries/useMember';
import { useSession } from 'next-auth/react';
import Spinner from '@/app/login/_components/Spinner';

export default function TicketLinks() {
  const router = useRouter();
  const { data: result, status, error } = useMember();

  if (status === 'pending') {
    return <Spinner />;
  }

  return (
    <div className={style.container}>
      <div className={style.link}>
        <div>
          <Image src="/images/snack.gray.svg" alt="No Image" width={26} height={26} />
          <div>마시멜로우</div>
        </div>
        <div onClick={() => router.push('/my/mallow')}>
          {status === 'success' && <div>{result?.data?.currency?.marshmallowQuantity}개</div>}
          {status === 'error' && <div>{0}개</div>}
          <div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={26} height={26} />
          </div>
        </div>
      </div>
    </div>
  );
}
