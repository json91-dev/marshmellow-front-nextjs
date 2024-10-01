'use client';
import styles from './AttendanceAlarmSetting.module.scss';
import React, { useEffect, useState } from 'react';
import useModalStore from '@/store/modalStore';
import { getLocalStorage } from '@/utils/utils';
import cx from 'classnames';

export default function AttendanceAlarmSetting() {
  const { showFulfillAttendanceAlarmSettingModal, isShowFulfillAttendanceAlarmSettingModal } = useModalStore();
  const [launchNotifyEnabled, setLaunchNotifyEnabled] = useState(getLocalStorage('APP_LAUNCH_NOTIFY_ENABLED')); // 알림 활성화 되었는지 여부 확인
  console.log(launchNotifyEnabled);

  /** 알림 상단 Setting 영역 제거 **/
  useEffect(() => {
    if (!isShowFulfillAttendanceAlarmSettingModal) {
      setLaunchNotifyEnabled(getLocalStorage('APP_LAUNCH_NOTIFY_ENABLED'));
    }
  }, [isShowFulfillAttendanceAlarmSettingModal]);

  return (
    <div className={cx(styles.settingAlert, launchNotifyEnabled && styles.hidden)}>
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
