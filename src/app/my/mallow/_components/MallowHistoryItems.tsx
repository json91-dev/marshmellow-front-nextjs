'use client';
import styles from '@/app/my/mallow/page.module.scss';
import { extractHourMinute, replaceAt } from '@/utils/utils';
import React, { useMemo } from 'react';
import { useMarshmallowHistoryQuery } from '@/api/queries/currency';
import useMallowHistoryStore from '@/store/mallowHistoryStore';

export default function MallowHistoryItems() {
  const { history } = useMallowHistoryStore();
  const { data: result, status } = useMarshmallowHistoryQuery(history.filterState, history.filterMonth);

  const groupDateMallowList = useMemo(() => {
    // 날짜별로 데이터를 그룹화하는 함수
    function groupData(data: any) {
      return data.reduce((acc: any, item: any) => {
        const date = item.createdAt.split('T')[0].replaceAll('-', '.');
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {});
    }

    if (result?.data) {
      return Object.entries(groupData(result.data)).map(([key, value]: any) => ({
        date: key,
        mallowItems: value,
      }));
    } else {
      return [];
    }
  }, [result?.data, status]);

  if (status === 'error' || status === 'pending') {
    return null;
  }

  if (result.data.length === 0) {
    return <div className={styles.oneYearNoneInfo}>최근 1년간 내역이 없습니다.</div>;
  }

  console.log(groupDateMallowList);
  return (
    <>
      <div className={styles.actionHistory}>
        {groupDateMallowList?.map((item, index) => {
          return (
            <>
              {index === 0 ? (
                <div key={item.date} className={styles.actionDate}>
                  {replaceAt(item.date, item.date.indexOf('.'), '\n')}
                </div>
              ) : (
                <div key={item.date} className={styles.actionDate}>
                  {item.date.substring(item.date.indexOf('.') + 1)}
                </div>
              )}
              <div className={styles.actionList}>
                {item?.mallowItems?.map((item: any) => {
                  return (
                    <div key={item.createdAt} className={styles.item}>
                      <div className={styles.info}>
                        <div>{item.modifyReasonDescription}</div>
                        <div>{item.modifyReasonTitle}</div>
                        <div>
                          {extractHourMinute(item.createdAt)} | {item.state}
                        </div>
                      </div>
                      <div className={styles.count}>+{item.modifiedQuantity}개</div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.oneYearInfo}>최근 1년 내역만 확인할 수 있습니다.</div>
    </>
  );
}
