import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import MissionCalendar from '@/app/attendance/_components/MissionCalendar';
import Image from 'next/image';
import React from 'react';
import BottomInfo from '@/app/attendance/_components/BottomInfo';
import dayjs from 'dayjs';
import AttendanceAlarmSetting from '@/app/attendance/_components/AttendanceAlarmSetting';
import AdBanner from '@/components/ads/AdBanner';

export default function AttendancePage() {
  return (
    <div className={styles.attendancePage}>
      <TopNavigation title={'근태 관리'} />
      <AttendanceAlarmSetting />

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
        <AdBanner dataAdSlot={'3341770865'} dataFullWidthResponsive={false} dataAdFormat={'inline'} />
      </div>
    </div>
  );
}
