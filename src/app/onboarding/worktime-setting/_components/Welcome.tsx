import Image from 'next/image';
import React from 'react';
import styles from '../page.module.scss';

export default function Welcome({ setTutorialStep }: any) {
  return (
    <div className={styles.welcome}>
      <div className={styles.headerTitle}>합격을 축하드려요! 🎉</div>

      <div className={styles.messageBox}>
        <p className={styles.title}>만나서 반가워요!</p>
        <p className={styles.description}>마시멜로우에서 할 업무는 딱 세가지만 기억하세요!</p>
        <div className={styles.messageInfo}>
          <div>정시출근</div>
          <div>점심식사</div>
          <div>정시퇴근</div>
        </div>
        <p className={styles.description}>
          업무 시간에 <span>15분 내로 마시멜로우 버튼만 누르면</span> 끝!
        </p>
        <div className={styles.tip}>
          <div className={styles.tipBox}>Tip</div>
          <p className={styles.tipInfo}>꿀팁! 1분 안에 누르면 더 많이 받을 수 있어요. </p>
        </div>
      </div>

      <div className={styles.welcomeImages}>
        <Image src="/images/welcome.blur.png" alt="No Image" width={200} height={200} />
        <Image src="/images/welcome.confetti.png" alt="No Image" width={300} height={100} />
        <Image src="/images/welcome.mallow.png" alt="No Image" width={128} height={128} />
      </div>

      <div className={styles.bottomInfo}>
        <div>정시출근</div>
        <div>점심식사</div>
        <div>정시퇴근</div>
      </div>

      <div className={styles.bottomArrow} onClick={() => setTutorialStep(2)}>
        <Image src="/images/arrow.right.white.svg" alt="No Image" width={64} height={64} />
      </div>
    </div>
  );
}
