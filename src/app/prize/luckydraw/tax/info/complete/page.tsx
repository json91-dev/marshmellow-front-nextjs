import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import Image from 'next/image';
import React from 'react';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';

export default function taxInfoCompletePage() {
  return (
    <div className={styles.taxInfoCompletePage}>
      <TopNavigation />
      <div className={styles.inner}>
        <div className={styles.headInfoBox}>
          <p>입력한 정보를 확인해주세요.</p>
        </div>

        <div className={styles.depositCheck}>
          <p>입금여부</p>
          <p>네, 입금했어요</p>
        </div>

        <div className={styles.horizontalLine} />

        <div className={styles.idCardCheck}>
          <div className={styles.name}>
            <p>신분증</p>
            <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
          </div>
          <div className={styles.idCard}>
            <Image src={'/images/mallow.search.svg'} width={120} height={120} alt="No Image" />
          </div>
        </div>
        <div className={styles.emailCheck}>
          <div className={styles.name}>
            <p>이메일</p>
            <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
          </div>
          <p className={styles.email}>apple@email.com</p>
        </div>
        <div className={styles.addressCheck}>
          <div className={styles.name}>
            <p>경품 수령 주소</p>
            <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
          </div>
          <p className={styles.address}>
            {'[00000]서울특별시 서대문구 도로동 00-00\n' +
              '상세 주소를 여기서 보여줍니다요\n' +
              '김이름\n' +
              '010-0000-0000'}
          </p>
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={cx(buttonStyle.confirmButton, 11 === 11 && buttonStyle.active)}>제출하기</div>
      </div>
    </div>
  );
}
