'use client';

import React from 'react';
import style from './page.module.scss';
import TopNavigationWithSetting from '@/app/_components/common/TopNavigationWithSetting';
import { useAlarmQuery } from '@/app/_hook/queries/msw';
import { timeAgo } from '@/utils/utils';

export default function AlarmPage() {
  const { data: alarmResult, isLoading, isFetching } = useAlarmQuery();

  return (
    <div className={style.alarmPage}>
      <TopNavigationWithSetting title={'알림 내역'} />
      <div className={style.scrollArea}>
        {alarmResult?.data.map((item: any) => {
          const labels: any = {
            contact: '문의 답변',
            notice: '공지사항',
            event: '이벤트',
            work: '업무',
          };

          const label = labels[item.type];

          return (
            <div className={style.alarmItems}>
              <div className={style.header}>
                <p>{label}</p>
                <div className={style.time}>
                  <p>{timeAgo(item.date)}</p>
                  <div className={style.notReadBox}></div>
                </div>
              </div>
              <p className={style.title}>{item.title}</p>
              {item.description && <p className={style.description}>{item.description}</p>}
            </div>
          );
        })}
      </div>

      <div className={style.bottom}>
        <div className={style.banner}>적응형 배너</div>
        <p>최근 3개월동안 받은 알림 내역입니다.</p>
      </div>
    </div>
  );
}
