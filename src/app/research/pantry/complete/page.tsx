'use client';
import styles from './page.module.scss';
import React from 'react';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';
import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';

export default function LuckyDrawResearchCompletePage() {
  return (
    <div className={styles.researchPantryCompletePage}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />
      <div className={styles.scrollArea}>
        <p className={styles.title}>{'설문조사에 응해주셔서 감사합니다!'}</p>
        <p className={styles.description}>
          {'여러분의 소중한 의견들을 반영해\n'}
          {'마시멜로우의 복지를 개선해나가겠습니다.'}
        </p>
      </div>

      <div className={buttonStyle.horizontalButtonArea}>
        <button className={cx(buttonStyle.confirmButton, buttonStyle.active)}>확인</button>
      </div>
    </div>
  );
}
