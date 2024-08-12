import style from './page.module.scss';
import NameCard from '@/app/(main)/desk/_components/namecard/NameCard';
import React from 'react';
import Options from '@/app/(main)/desk/_components/Options';
import TicketLinks from '@/app/(main)/desk/_components/TickekLinks';
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
        <div className={style.banner}>적응형 배너</div>
        <PageLinks />
      </div>
    </div>
  );
}
