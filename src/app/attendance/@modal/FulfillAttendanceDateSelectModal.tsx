'use client';
import style from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React, { useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import { getCalendarData } from '@/utils/utils';
import dayjs, { Dayjs } from 'dayjs';
import { useWorkMonthlyQuery } from '@/app/_hook/queries/activity';
import Image from 'next/image';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

type calendarItem = {
  today: boolean;
  completeCount: number; // 0,1,2
  name: string; // "1"
  date: string; // "2024-05-01"
  isFilled: boolean;
};

type calendarList = (calendarItem | 0)[][];

export default function FulfillAttendanceDateSelectModal() {
  const { isShowFulfillAttendanceDateSelectModal, showFulfillAttendanceDateSelectModal } = useModalStore();
  const [calendarList, setCalendarList] = useState<calendarList>([[]]);
  const { data: workMonthlyResult, isLoading, isFetching } = useWorkMonthlyQuery(dayjs().format('YYYY-MM-DD'));
  const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfileQuery();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  /** Calendar 화면을 그리기 위한 데이터를 생성 **/
  useEffect(() => {
    const { calendarList: calendarData } = getCalendarData(dayjs().year(), dayjs().month());
    if (workMonthlyResult) {
      const { works } = workMonthlyResult.data;
      // 날짜를 키로 하는 객체 맵 만들기
      const worksObjectMap = works.reduce((map: any, obj: calendarItem) => {
        map[obj.name] = obj;
        return map;
      }, {});

      // 2차원 배열을 순회하며 객체로 대체
      const combinedCalendarData: calendarList = calendarData.map((week) =>
        week.map((day) => (day === 0 ? 0 : worksObjectMap[String(day)] || day)),
      );

      setCalendarList(combinedCalendarData);
    }
  }, [workMonthlyResult]);

  useEffect(() => {});

  return (
    <>
      <CSSTransition in={isShowFulfillAttendanceDateSelectModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop
          ref={backdropRef}
          onClick={() => {
            showFulfillAttendanceDateSelectModal(false);
          }}
        />
      </CSSTransition>

      <CSSTransition
        in={isShowFulfillAttendanceDateSelectModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.fulfillAttendanceDateSelectModal, 'modal')} ref={modalRef}>
          {isLoading || isFetching || isLoadingProfile || isFetchingProfile ? (
            <></>
          ) : (
            <>
              <p className={style.title}>출근 보충할 날 선택하기</p>
              <div className={style.calendarBody}>
                <div className={style.days}>
                  {DAY_LIST.map((day) => {
                    return <p key={day}>{day}</p>;
                  })}
                </div>
                <div className={style.dates}>
                  {calendarList?.map((week, weekIndex) => {
                    return (
                      <div className={style.week} key={weekIndex}>
                        {week.map((item, dayIndex) => {
                          if (item === 0) {
                            return <div key={`empty-${weekIndex}-${dayIndex}`} className={style.dateItem} />;
                          }

                          return (
                            <CalendarMallowItem
                              key={item.date}
                              item={item}
                              memberStartDate={dayjs(profileResult.data.createdAt)}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={style.bottomInfo}>
                <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
                <p>출근 보충 시 업무 3개 모두 완수한 것으로 처리돼요.</p>
              </div>
            </>
          )}
        </div>
      </CSSTransition>
    </>
  );
}

function CalendarMallowItem({ item, memberStartDate }: { item: calendarItem; memberStartDate: Dayjs }) {
  const isBeforeMemberStart = dayjs(item.date).isBefore(memberStartDate, 'day');
  const isBetweenTodayAndMemberStart = dayjs(item.date).isBetween(memberStartDate, dayjs(), 'day', '[)');
  const isToday = dayjs().isSame(dayjs(item.date), 'day');
  const isAfterToday = dayjs(item.date).isAfter(dayjs(), 'day');
  const { showFulfillAttendanceDateCheckModal, showFulfillAttendanceDateSelectModal } = useModalStore();

  if (item.completeCount > 0) {
    return (
      <div key={item.date} className={style.dateItem}>
        {item.completeCount === 1 && <Image src="/images/snack.gray.svg" alt="No Image" width={28} height={28} />}
        {item.completeCount === 2 && <Image src="/images/snack.purple.light.svg" alt="No Image" width={28} height={28} />}
        {item.completeCount === 3 && <Image src="/images/snack.purple.svg" alt="No Image" width={28} height={28} />}
        {item.today && <div className={style.dot} />}
      </div>
    );
  }

  const onClickMissionFailed = useCallback((dateString: string) => {
    showFulfillAttendanceDateSelectModal(false);
    showFulfillAttendanceDateCheckModal(true, dateString);
  }, []);

  return (
    <div key={item.date} className={style.dateItem}>
      {isBeforeMemberStart && (
        <div>
          <p className={style.gray}>{item.name}</p>
        </div>
      )}

      {isBetweenTodayAndMemberStart && (
        <div className={style.missionFail} onClick={() => onClickMissionFailed(item.date)}>
          <p>{item.name}</p>
        </div>
      )}

      {isToday && (
        <div>
          <p>{item.name}</p>
        </div>
      )}

      {isAfterToday && (
        <div>
          <p>{item.name}</p>
        </div>
      )}

      {item.today && <div className={style.dot} />}
    </div>
  );
}
