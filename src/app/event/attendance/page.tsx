'use client';
import styles from './page.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';

export default function FullAttendanceEventPage() {
  return (
    <div className={styles.fullAttendanceEventPage}>
      <TopNavigationWithCancel title={'이벤트'} />

      <div className={styles.titleImage}>
        <Image src="/images/event.full.attendance.png" alt="No Image" width={360} height={240} />
      </div>

      <div className={styles.eventDetail}>
        <div className={styles.badge}>
          <p className={styles.badgeText}>항시</p>
        </div>

        <div className={styles.title}>
          <p className={styles.name}>만근 이벤트</p>
          <p className={styles.description}>한 달 동안 모든 업무를 완수한 열일러를 위한 이벤트</p>
        </div>

        <div className={styles.info}>
          <p className={styles.name}>이벤트 기간</p>
          <div className={styles.descriptionBox}>
            <p className={styles.description}>매달 1일 ~ 매달 말일</p>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.name}>당첨 대상</p>

          <div className={styles.descriptionBox}>
            <p className={styles.description}>한 달 동안 모든 업무를 완수해 이벤트에 참여한 모든 임직원분들</p>
          </div>
        </div>

        <div className={buttonStyle.verticalButtonArea}>
          <div className={cx(buttonStyle.confirmButton, buttonStyle.active)}>참여 조건 알아보기</div>
        </div>
      </div>
    </div>
  );
}
