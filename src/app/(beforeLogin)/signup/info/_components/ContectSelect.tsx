import React, { useEffect } from 'react';
import style from './contactSelect.module.scss';
import Image from 'next/image';
export default function ContactSelect() {
  useEffect(() => {}, []);

  return (
    <div className={style.container}>
      <select className={style.input}>
        <option data-v-19780c98="" selected={true} value="선택없음">
          선택없음
        </option>
        <option data-v-19780c98="" value="0">
          광고
        </option>
        <option data-v-19780c98="" value="1">
          지인 추천
        </option>
        <option data-v-19780c98="" value="2">
          기타
        </option>
      </select>
      <div className={style.image}>
        <Image src="/images/icon_bottom_arrow.png" alt="No Image" fill objectFit="contain" />
      </div>
    </div>
  );
}
