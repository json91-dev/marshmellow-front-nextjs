import style from './attendance.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';
import MissionCalendar from '@/app/attendance/_components/MissionCalendar';
import Image from 'next/image';
import React from 'react';
// import useBottomSheet from '@/app/_hook/useBottomSheet';

export default function AttendancePage() {
  return (
    <div className={style.attendancePage}>
      <TopNavigation title={'근태 관리'} />

      <div className={style.settingAlert}>
        <div className={style.top}>
          <div className={style.title}>출근을 놓치지 마세요</div>
          <div className={style.toggle}>
            <div className={style.onOffSwitchContainer}>
              <input type="checkbox" name="onoff-switch" id="onoff-switch1" />
              <label htmlFor="onoff-switch1"></label>
            </div>
          </div>
        </div>
        <div className={style.description}>출근하지 않았으면, 점심시간 30분 전에 알림을 보내드려요.</div>
      </div>

      <div className={style.body}>
        <div className={style.info}>
          <div className={style.infoText}>
            <p>
              이번달 만근<span>하고</span>
            </p>
            <p>
              마시멜로우<span>모아요!</span>
            </p>
          </div>
          <div className={style.infoDate}>
            <Image src={'/images/mallow.date.bg.svg'} width={80} height={80} alt="No Image" />
            <div className={style.todayDate}>
              <p className={style.month}>3월</p>
              <p className={style.date}>10일</p>
            </div>
          </div>
        </div>

        <div className={style.calendarContainer}>
          <MissionCalendar />
        </div>
      </div>

      <div className={style.banner}>
        <p>적응형 배너</p>
      </div>
    </div>
  );
}
