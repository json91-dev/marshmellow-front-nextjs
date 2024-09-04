'use client';

import React from 'react';
import styles from './page.module.scss';
import TopNavigationWithSetting from '@/components/nav/TopNavigationWithSetting';
import { useAlarmQuery } from '@/api/queries/msw';
import { timeAgo } from '@/utils/utils';

export default function AlarmPage() {
  const { data: alarmResult, isLoading, isFetching } = useAlarmQuery();

  return (
    <div className={styles.alarmPage}>
      <TopNavigationWithSetting title={'알림 내역'} />
      <div className={styles.scrollArea}>
        {alarmResult?.data.map((item: any) => {
          const labels: any = {
            contact: '문의 답변',
            notice: '공지사항',
            event: '이벤트',
            work: '업무',
          };

          const label = labels[item.type];

          return (
            <div className={styles.alarmItems}>
              <div className={styles.header}>
                <p>{label}</p>
                <div className={styles.time}>
                  <p>{timeAgo(item.date)}</p>
                  <div className={styles.notReadBox}></div>
                </div>
              </div>
              <p className={styles.title}>{item.title}</p>
              {item.description && <p className={styles.description}>{item.description}</p>}
            </div>
          );
        })}
      </div>

      <div className={styles.bottom}>
        <div className={styles.banner}>적응형 배너</div>
        <p>최근 3개월동안 받은 알림 내역입니다.</p>
      </div>
    </div>
  );
}
