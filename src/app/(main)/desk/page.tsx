import style from './desk.module.scss';
import NameCard from '@/app/(main)/desk/_components/NameCard';
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
        {/*<div className={style.menu}>*/}
        {/*  <div>사용가이드</div>*/}
        {/*  <div>아이콘</div>*/}
        {/*</div>*/}

        {/*<div className={style.menu}>*/}
        {/*  <div>이벤트</div>*/}
        {/*  <div>아이콘</div>*/}
        {/*</div>*/}

        {/*<div className={style.menu}>*/}
        {/*  <div>공지사항</div>*/}
        {/*  <div>아이콘</div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
