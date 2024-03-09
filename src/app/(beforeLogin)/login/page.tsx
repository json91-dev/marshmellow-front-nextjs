import style from './login.module.scss';
import React from 'react';
import Image from 'next/image';

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.titleSection}>
        <h2>오늘도 열심히 일한 당신! 혜택을 누리고 즐겨라!</h2>
        <h1>직장인들의 달달한 간식</h1>
        <div className={style.image}>
          {/*<Image src="/images/login_main.svg" width="527" height="512" layout="responsive" alt="No Image"></Image>*/}
        </div>
      </div>

      <div className={style.bottomLoginSection}>
        <p>합류하시면 다양한 서비스들을 이용해보실 수 있어요!</p>
        <div>카카오톡으로 시작하기</div>
        <div>구글로 시작하기</div>
        <div> 마시멜로우 둘러보기 </div>
      </div>
    </div>
  );
}
