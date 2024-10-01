'use client';
import styles from './AlarmCard.module.scss';
import React, { useCallback, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils/utils';
import useToastStore from '@/store/toastStore';

export default function AlarmCard() {
  const [pantryAlarmChecked, setPantryAlarmChecked] = useState<boolean>(() => {
    return getLocalStorage('PANTRY_ALARM_CHECKED');
  });
  const { openToast } = useToastStore();

  const onClickAlarmCard = useCallback(() => {
    setPantryAlarmChecked(true);
    setLocalStorage('PANTRY_ALARM_CHECKED', true);
    openToast('탕비실 오픈 시 오픈알림을 보내드릴게요!');
  }, []);

  if (pantryAlarmChecked) {
    return null;
  }

  return (
    <div className={styles.alarmCard} onClick={onClickAlarmCard}>
      <p>탕비실 오픈 시 알림을 보내드려요</p>
      <div className={styles.alarmButton}>
        <p>오픈알림 받기</p>
      </div>
    </div>
  );
}
