import style from './desk.module.scss';
import NameCard from '@/app/(main)/desk/_components/namecard/NameCard';
import Image from 'next/image';
import React from 'react';
import Options from '@/app/(main)/desk/_components/Options';
import TicketLinks from '@/app/(main)/desk/_components/TickekLinks';
import HorizontalLine from '@/app/(main)/desk/_components/HorizontalLine';
import PageLinks from '@/app/(main)/desk/_components/PageLinks';

export default function DeskPage() {
  return (
    <div className={style.deskPage}>
      <div className={style.option}>
        <Options />
      </div>
      <div className={style.main}>
        <NameCard />
        <TicketLinks />
        <HorizontalLine />
        <PageLinks />
      </div>
    </div>
  );
}
