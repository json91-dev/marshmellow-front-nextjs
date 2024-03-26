import style from './desk.module.scss';
import NameCard from '@/app/(main)/desk/_components/NameCard';
import Image from 'next/image';
import React from 'react';

export default function DeskPage() {
  return (
    <div className={style.container}>
      <div className={style.options}>
        <div className={style.image}>
          <Image src="/images/icon_notice.svg" alt="No Image" width={24} height={24} />
        </div>
        <div className={style.image}>
          <Image src="/images/icon_setting.svg" width={24} height={24} alt={'No Image'} />
        </div>
      </div>

      <div className={style.deskMain}>
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />
        <NameCard />

        <div className={style.ticket}>
          <div>
            <div>마시멜로우</div>
            <div>324개</div>
          </div>

          <div> vertical line</div>

          <div>
            <div>응모권</div>
            <div>324개</div>
          </div>
        </div>

        <div className={style.banner}></div>

        <div className={style.menu}>
          <div>사용가이드</div>
          <div>아이콘</div>
        </div>

        <div className={style.menu}>
          <div>이벤트</div>
          <div>아이콘</div>
        </div>

        <div className={style.menu}>
          <div>공지사항</div>
          <div>아이콘</div>
        </div>
      </div>
    </div>
  );
}
