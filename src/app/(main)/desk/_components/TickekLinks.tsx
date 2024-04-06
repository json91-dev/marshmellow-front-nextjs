import style from './ticketLink.module.scss';
import Image from 'next/image';
import React from 'react';

export default function TicketLinks() {
  return (
    <div className={style.container}>
      <div className={style.link}>
        <div>
          <div>마시멜로우</div>
          {/*<Image src="/images/marshmellow.svg" alt="No Image" width={68} height={68} />*/}
        </div>
        <div>324개</div>
      </div>
    </div>
  );
}
