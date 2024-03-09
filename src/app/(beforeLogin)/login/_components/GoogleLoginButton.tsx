import style from './googleLoginButton.module.scss';
import Image from 'next/image';
import React, { CSSProperties } from 'react';

type Props = {
  style?: CSSProperties;
};
export default function GoogleLoginButton(props: Props) {
  return (
    <div className={style.container} style={props.style}>
      <div className={style.button}>
        <div className={style.image}>
          <Image src="/images/logo_google.png" alt="No Image" fill objectFit="contain" />
        </div>
        <p>구글로 시작하기</p>
      </div>
    </div>
  );
}
