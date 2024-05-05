import { getDaysInMonth, subMonths } from 'date-fns';
import React, { useMemo } from 'react';

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const useCalendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const totalMonthDays = getDaysInMonth(currentDate);

  // 이전달 일요일부터 오늘까지의 날짜까지에 대한 트래쉬값 생성 ex) [0, 0], [0]
  const prevDayList = useMemo(() => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return Array.from({
      length: Math.max(0, firstDayOfMonth.getDay()),
    }).map(() => DEFAULT_TRASH_VALUE);
  }, [currentDate]);

  // 이번달에 포함된 날짜 모두 출력 ex) 1,2,3,...31
  const currentDayList = Array.from({ length: totalMonthDays }).map((_, i) => i + 1);

  // 다음달에 포함될 트래쉬값 생성 ex) [0, 0, 0]
  const nextDayList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  // 날짜에 대한 1차원 튜플 생성
  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

  // 1차원 튜플 => 2차원 튜플
  const weekCalendarList = currentCalendarList.reduce((acc: number[][], cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  return {
    weekCalendarList: weekCalendarList,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};
export default useCalendar;
