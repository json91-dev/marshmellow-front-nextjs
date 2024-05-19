'use client';
import Spinner from '@/app/login/_components/Spinner';
import style from '@/app/my/mallow/marshmallow.module.scss';
import { extractHourMinute, replaceAt } from '@/utils/utils';
import React, { useMemo } from 'react';
import { useMarshmallowHistoryQuery } from '@/app/_hook/queries/currency';
import { useMallowStore } from '@/store/mallow';

export default function MallowHistoryItems() {
  const { history } = useMallowStore();
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
    return <Spinner />;
  }

  if (result.data.length === 0) {
    return <div className={style.oneYearNoneInfo}>최근 1년간 내역이 없습니다.</div>;
  }

  console.log(groupDateMallowList);
  return (
    <>
      <div className={style.actionHistory}>
        {groupDateMallowList?.map((item, index) => {
          return (
            <>
              {index === 0 ? (
                <div className={style.actionDate}>{replaceAt(item.date, item.date.indexOf('.'), '\n')}</div>
              ) : (
                <div className={style.actionDate}>{item.date.substring(item.date.indexOf('.') + 1)}</div>
              )}
              <div className={style.actionList}>
                {item?.mallowItems?.map((item: any) => {
                  return (
                    <div className={style.item}>
                      <div className={style.info}>
                        <div>{item.modifyReasonDescription}</div>
                        <div>{item.modifyReasonTitle}</div>
                        <div>
                          {extractHourMinute(item.createdAt)} | {item.state}
                        </div>
                      </div>
                      <div className={style.count}>+{item.modifiedQuantity}개</div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
      <div className={style.oneYearInfo}>최근 1년 내역만 확인할 수 있습니다.</div>
    </>
  );
}
