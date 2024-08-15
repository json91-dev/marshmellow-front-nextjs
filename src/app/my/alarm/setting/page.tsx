'use client';

import React from 'react';
import styles from './page.module.scss';
import inputStyle from '@/moduleStyle/Inputs.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import Image from 'next/image';

export default function AlarmPage() {
  return (
    <div className={styles.alarmSettingPage}>
      <TopNavigation title={'알림 설정'} />
      <div className={styles.scrollArea}>
        <div className={styles.alarmArea}>
          <div className={styles.topLabel}>
            <p>근태 알림</p>
            <p>
              {'출근을 깜빡했다면 걱정하지 마세요. 출근하지 않았으면,\n'}
              {'점심시간 30분 전에 알림을 보내 하루 한 번 출근을 놓치지 않아요.'}
            </p>
          </div>

          <div className={styles.alarmRow}>
            <div className={styles.info}>
              <p>출근을 놓치지 마세요.</p>
            </div>
            <div className={inputStyle.toggleCheckbox}>
              <input type="checkbox" name="CheckNotice" id="CheckNotice" />
              <label htmlFor="CheckNotice"></label>
            </div>
          </div>
        </div>

        <div className={styles.alarmArea}>
          <div className={styles.topLabel}>
            <p>일반 알림</p>
            <p>마시멜로우에서 새로운 소식이 생기면 알려드릴게요.</p>
          </div>

          <div className={styles.alarmRow}>
            <div className={styles.info}>
              <p>새로운 공지사항이 있어요.</p>
            </div>
            <div className={inputStyle.toggleCheckbox}>
              <input type="checkbox" name="CheckNotice" id="CheckNotice" />
              <label htmlFor="CheckNotice"></label>
            </div>
          </div>

          <div className={styles.alarmRow}>
            <div className={styles.info}>
              <p>마시멜로우가 소멸될 예정이에요.</p>
              <p>이 알람을 활성화 시키면, 당월 마시멜로우 소멸 알림을 매월 1일에 보내드려요.</p>
            </div>
            <div className={inputStyle.toggleCheckbox}>
              <input type="checkbox" name="CheckMallowExpired" id="CheckMallowExpired" />
              <label htmlFor="CheckMallowExpired"></label>
            </div>
          </div>
        </div>

        <div className={styles.alarmArea}>
          <div className={styles.topLabel}>
            <p>혜택 마케팅 알림</p>
            <p>
              {'마시멜로우의 다양한 혜택 및 이벤트를 알려드릴게요.\n'}
              {'알림을 꺼도 중요한 정보는 받을 수 있어요.'}
            </p>
          </div>

          <div className={styles.alarmRow}>
            <div className={styles.info}>
              <p>혜택 마케팅 알림</p>
            </div>
            <div className={inputStyle.toggleCheckbox}>
              <input type="checkbox" name="CheckMarketing" id="CheckMarketing" />
              <label htmlFor="CheckMarketing"></label>
            </div>
          </div>

          <div className={styles.alarmRow}>
            <div className={styles.info}>
              <p>야간 알림 수신 동의(21:00 ~ 08:00)</p>
            </div>
            <div className={styles.nightAlarmToggle}>
              <p>동의 안함</p>
              <Image src={'/images/arrow.right.svg'} width={24} height={24} alt="No Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
