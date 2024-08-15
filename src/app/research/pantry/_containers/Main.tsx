import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';
import Image from 'next/image';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import React from 'react';
import styles from './main.module.scss';
import { StepIndicator } from '@/components/common/StepIndicator';

export default function Main() {
  return (
    <div className={styles.pantryResearchPage}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />

      <div className={styles.scrollArea}>
        <p className={styles.title}>
          {'해당 설문조사는 마시멜로우의\n'}
          {'복지 개선을 위해 진행되는 설문조사입니다.'}
        </p>
        <p className={styles.description}>
          {'설문조사 문항은 총 6개입니다.\n'}
          {'예상 소요시간은 6분 입니다.'}
        </p>

        <div className={styles.image}>
          <Image src="/images/research.pantry.survey.png" alt="No Image" width={324} height={340} />
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={cx(buttonStyle.confirmButton, buttonStyle.active)}>다음</div>
      </div>
    </div>
  );
}
