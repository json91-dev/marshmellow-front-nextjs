import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import MissionCalendar from '@/app/attendance/_components/MissionCalendar';
import Image from 'next/image';
import React from 'react';
import BottomInfo from '@/app/attendance/_components/BottomInfo';
import dayjs from 'dayjs';

export default function AttendancePage() {
  return (
    <div className={styles.attendancePage}>
      <TopNavigation title={'근태 관리'} />

      <div className={styles.settingAlert}>
        <div className={styles.top}>
          <div className={styles.title}>출근을 놓치지 마세요</div>
          <div className={styles.toggle}>
            <div className={styles.onOffSwitchContainer}>
              <input type="checkbox" name="onoff-switch" id="onoff-switch1" />
              <label htmlFor="onoff-switch1"></label>
            </div>
          </div>
        </div>
        <div className={styles.description}>출근하지 않았으면, 점심시간 30분 전에 알림을 보내드려요.</div>
      </div>

      <div className={styles.body}>
        <div className={styles.calendarArea}>
          <div className={styles.info}>
            <div className={styles.infoText}>
              <p>
                이번달 만근<span>하고</span>
              </p>
              <p>
                마시멜로우<span>모아요!</span>
              </p>
            </div>
            <div className={styles.infoDate}>
              <Image src={'/images/mallow.date.bg.svg'} width={80} height={80} alt="No Image" />
              <div className={styles.todayDate}>
                <p className={styles.month}>{dayjs().month() + 1}월</p>
                <p className={styles.date}>{dayjs().date()}일</p>
              </div>
            </div>
          </div>

          <div className={styles.calendarContainer}>
            <MissionCalendar />
          </div>
        </div>

        <BottomInfo />
      </div>

      <div className={styles.banner}>
        <p>적응형 배너</p>
      </div>
    </div>
  );
}
