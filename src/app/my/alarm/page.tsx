'use client';

import React from 'react';
import style from './page.module.scss';
import TopNavigationWithAlarmSetting from '@/app/_components/common/TopNavigationWithAlarmSetting';
import { useAlarmQuery } from '@/app/_hook/queries/msw';

export default function AlarmPage() {
  const { data: alarmResult, isLoading, isFetching } = useAlarmQuery();

  return (
    <div className={style.alarmPage}>
      <TopNavigationWithAlarmSetting title={'알림 내역'} />

      <div className={style.scrollArea}></div>
    </div>
  );
}
