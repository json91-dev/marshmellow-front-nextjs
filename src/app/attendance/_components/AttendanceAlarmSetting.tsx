'use client';
import styles from './AttendanceAlarmSetting.module.scss';
import React from 'react';
import useModalStore from '@/store/modalStore';

export default function AttendanceAlarmSetting() {
  const { showFulfillAttendanceAlarmSettingModal } = useModalStore();
  return (
    <div className={styles.settingAlert}>
      <div className={styles.top}>
        <div className={styles.title}>출근을 놓치지 마세요</div>
        <div className={styles.toggle}>
          <div className={styles.onOffSwitchContainer}>
            <div className={styles.boundingBox} onClick={() => showFulfillAttendanceAlarmSettingModal(true)} />
            <input type="checkbox" name="onoff-switch" id="onoff-switch1" />
            <label htmlFor="onoff-switch1"></label>
          </div>
        </div>
      </div>
      <div className={styles.description}>출근하지 않았으면, 점심시간 30분 전에 알림을 보내드려요.</div>
    </div>
  );
}
