'use client';
import style from './missionCalendar.module.scss';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { getCalendarData } from '@/utils/utils';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
import Spinner from '@/app/login/_components/Spinner';
import { useSession } from 'next-auth/react';
import MissionCalendarGuest from '@/app/attendance/_components/guest/MissionCalendarGuest';
import { useWorkMonthlyQuery } from '@/app/_hook/queries/activity';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import { useModalStore } from '@/store/modal';
import { useToastStore } from '@/store/toast';
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

type calendarItem = {
  today: boolean;
  completeCount: number; // 0,1,2
  name: string; // "1"
  date: string; // "2024-05-01"
  isFilled: boolean;
};

type calendarList = (calendarItem | 0)[][];

export default function MissionCalendar() {
  const [date, setDate] = useState(dayjs());
  const [calendarList, setCalendarList] = useState<calendarList>([[]]);
  const { data: workMonthlyResult, isLoading, isFetching } = useWorkMonthlyQuery(date.format('YYYY-MM-DD'));
  const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfileQuery();
  const { status: sessionStatus } = useSession();

  /** Calendar 화면을 그리기 위한 데이터를 생성 **/
  useEffect(() => {
    const { calendarList: calendarData, prevDayEmptyList, nextDayEmptyList } = getCalendarData(date.year(), date.month());
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
  }, [date, workMonthlyResult]);

  if (sessionStatus === 'unauthenticated') {
    return <MissionCalendarGuest />;
  }

  if (isLoading || isFetching || isLoadingProfile || isFetchingProfile) {
    return (
      <div className={style.missionCalendar}>
        <Spinner />
      </div>
    );
  }

  const memberStartDate = dayjs(profileResult.data.createdAt);

  return (
    <div className={style.missionCalendar}>
      <MonthHeader date={date} setDate={setDate} />
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

                  return <CalendarMallowItem key={item.date} item={item} memberStartDate={memberStartDate} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <MissionInfo />
    </div>
  );
}

/** 상단 날짜 선택 **/
function MonthHeader({ date, setDate }: { date: Dayjs; setDate: any }) {
  const currentMonth = dayjs().month(); // dayjs는 월을 0부터 시작하기 때문에 +1 해줍니다.
  const minMonth = currentMonth - 3;
  const maxMonth = currentMonth;
  const showPreviousButton = minMonth < date.month();
  const showNextButton = date.month() < maxMonth;

  /** TODO: 추후 1월, 2월, 3월에 에러 발생 예정. **/
  return (
    <div className={style.monthHeader}>
      {showPreviousButton && (
        <div className={style.leftButton} onClick={() => setDate(date.subtract(1, 'month'))}>
          <Image src="/images/arrow.calendar.left.svg" alt="No Image" width={24} height={24} />
        </div>
      )}
      <p>{date.month() + 1}월</p>
      {showNextButton && (
        <div className={style.rightButton} onClick={() => setDate(date.add(1, 'month'))}>
          <Image src="/images/arrow.calendar.right.svg" alt="No Image" width={24} height={24} />
        </div>
      )}
    </div>
  );
}

/** 하단 미션 정보 표기 **/
function MissionInfo() {
  return (
    <div className={style.missionInfo}>
      <div className={style.missions}>
        <div className={style.missionItem}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
          <p>업무 1개 완수</p>
        </div>

        <div className={style.missionItem}>
          <Image src="/images/snack.purple.light.svg" alt="No Image" width={24} height={24} />
          <p>업무 2개 완수</p>
        </div>

        <div className={style.missionItem}>
          <Image src="/images/snack.purple.svg" alt="No Image" width={24} height={24} />
          <p>업무 3개 완수</p>
        </div>
      </div>
    </div>
  );
}

function CalendarMallowItem({ item, memberStartDate }: { item: calendarItem; memberStartDate: Dayjs }) {
  const isBeforeMemberStart = dayjs(item.date).isBefore(memberStartDate, 'day');
  const isBetweenTodayAndMemberStart = dayjs(item.date).isBetween(memberStartDate, dayjs(), 'day', '[)');
  const isToday = dayjs().isSame(dayjs(item.date), 'day');
  const isAfterToday = dayjs(item.date).isAfter(dayjs(), 'day');
  const { showFulfillAttendanceDateCheckModal } = useModalStore();
  const { openToast } = useToastStore();

  const onClickMissionFailed = useCallback((dateString: string) => {
    const isDateThisMonth = dayjs(dateString).isSame(dayjs(), 'month');
    if (isDateThisMonth) {
      showFulfillAttendanceDateCheckModal(true, dateString);
    } else {
      openToast('현재 달에만 출근을 보충할 수 있습니다.');
    }
  }, []);

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
