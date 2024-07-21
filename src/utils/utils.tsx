import dayjs, { Dayjs } from 'dayjs';

export const isMobile = {
  Android: function () {
    if (typeof window !== 'undefined') {
      return navigator.userAgent.match(/Android/i);
    }
  },
  iOS: function () {
    if (typeof window !== 'undefined') {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
  },
  any: function () {
    if (typeof window !== 'undefined') {
      return isMobile.Android() || isMobile.iOS();
    }
  },
};
export function debounce(func: Function, delay: number) {
  let timerId: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function isAppleDevice() {
  // navigator.userAgent는 현재 브라우저의 User Agent 문자열을 반환합니다.
  const userAgent = navigator.userAgent;

  // iOS (iPhone, iPad, iPod) 장치인지 확인
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);

  // macOS 장치인지 확인
  const isMacOS = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);

  return isIOS || isMacOS;
}

export function isWindows() {
  return navigator.platform.indexOf('Win') > -1;
}

export const isAppleBrowser = () => {
  const userAgent = navigator.userAgent;
  return /Macintosh/.test(userAgent) || /iPhone|iPad|iPod/.test(userAgent);
};

export const browserPreventEvent = (event: () => void) => {
  history.pushState(null, '', location.href);
  event();
};

export async function fakeServerCall(data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 여기서는 단순히 받은 데이터를 반환하지만, 여기에 실제로 서버 로직을 구현할 수 있습니다.
      resolve({ success: false, data });
    }, 300); // 300ms 지연 후 응답 반환
  });
}

// 로컬 스토리지에 값을 설정하는 함수
export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// 로컬 스토리지에서 값을 가져오는 함수
export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
};

// localStorage에서 값을 가져오는 함수. 값이 없는 경우 기본값을 반환합니다.
export function getLocalStorageItem(key: string, defaultValue = null) {
  if (typeof window !== 'undefined') {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error('localStorage에서 값을 가져오는 중 오류가 발생했습니다:', error);
      return defaultValue;
    }
  }
}

export function getBirthNumberWithDot(input: string) {
  let output = input.toString(); // 입력값을 문자열로 변환

  if (output.length <= 4) {
    // 네 자리 이하 숫자는 변환 없이 반환
    return output;
  } else if (output.length === 5) {
    // 다섯 자리 숫자는 뒤에서 두 자리를 소수점으로 변환
    return output.substring(0, output.length - 1) + '.' + output.substring(output.length - 1);
  } else if (output.length === 6) {
    // 다섯 자리 숫자는 뒤에서 두 자리를 소수점으로 변환
    return output.substring(0, output.length - 2) + '.' + output.substring(output.length - 2);
  } else if (output.length === 7) {
    // 다섯 자리 숫자는 뒤에서 두 자리를 소수점으로 변환
    return output.substring(0, 4) + '.' + output.substring(4, 6) + '.' + output.substring(6);
  } else if (output.length === 8) {
    // 여덟 자리 숫자는 날짜 형태로 변환
    return output.substring(0, 4) + '.' + output.substring(4, 6) + '.' + output.substring(6);
  }
  return output; // 그 외의 경우는 입력값을 그대로 반환
}

/** 출력 => 2024년 10월 10일 **/
export function dateStringToFormat(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedData = new Intl.DateTimeFormat('ko-KR', options).format(date);
  const [year, month, day] = formattedData.split('.').map((part) => part.trim());
  return `${year}년 ${month}월 ${day}일`;
}

/** 출력 => 18:53 **/
export function extractHourMinute(dateString: string) {
  return dateString.split('T')[1].split(':').slice(0, 2).join(':');
}

export function replaceAt(str: string, index: number, replacement: string) {
  if (index < 0 || index >= str.length) {
    throw new Error('Index out of range');
  }

  return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

/** 출력 => 1년 1개월 10일 재직 **/
export function dateStringToFormatDiff(dateString: string) {
  const diffDate = new Date().getTime() - new Date(dateString).getTime();
  const getDayDiffDay = (startDate: any, finalDate: any) => {
    return Math.floor((finalDate - startDate) / (1000 * 3600 * 24));
  };
  const days = getDayDiffDay(new Date(dateString), new Date());

  const years = Math.floor(days / 365.25);
  const months = Math.floor((days % 365.25) / 30.44);
  const remainingDays = Math.floor((days % 365.25) % 30.44);

  return `${years}년 ${months}개월 ${remainingDays}일 재직`;
}

/** 출력 => HH:mm **/
export function formatHourMinute(hour: number): string {
  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  return `${formattedHour}:00`;
}

export function phoneFomatter(num: string, type = 1) {
  var formatNum = '';

  if (num.length == 11) {
    if (type == 0) {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
    } else {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
  } else if (num.length == 8) {
    formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else {
    if (num.indexOf('02') == 0) {
      if (type == 0) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
      } else {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      }
    } else {
      if (type == 0) {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
      } else {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      }
    }
  }

  return formatNum;
}

/** 출력 => 05.25 (토) **/
export function formatDateToTodayDate(date: Date) {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayOfWeek = days[date.getDay()];

  return `${month}.${day} (${dayOfWeek})`;
}

/** 출력 => "HH:00 ~ HH:15" **/
export function getWorkTimeRangeString(hour: number) {
  // 입력된 시간을 dayjs 객체로 변환하여 00분으로 설정
  const startTime = dayjs().hour(hour).minute(0).second(0).millisecond(0);

  // 종료 시간을 시작 시간에서 15분을 더한 시간으로 설정
  const endTime = startTime.add(15, 'minute');

  // "HH:00 ~ HH:15" 형식의 문자열을 반환
  return `${startTime.format('HH:mm')} ~ ${endTime.format('HH:mm')}`;
}

/** 근무현황 데이터에서 키값으로 객체 찾기 **/
export function findMissionDateMatchingStart(data: any, now: Dayjs) {
  const keys = Object.keys(data);

  for (let key of keys) {
    if (dayjs(data[key].start).isSame(now)) {
      return data[key];
    }
  }
  return null;
}

// 주어진 날짜의 해당 주 월요일을 찾는 함수
export function findMonday(date: Dayjs) {
  const dayOfWeek = date.day();
  const monday = date.subtract(dayOfWeek === 0 ? 6 : dayOfWeek - 1, 'day');
  return monday;
}

// 주어진 날짜의 해당 주 일요일을 찾는 함수
export function findSunday(date: Dayjs) {
  const dayOfWeek = date.day();
  const sunday = date.add(dayOfWeek === 0 ? 0 : 7 - dayOfWeek, 'day');
  return sunday;
}

export function getTotalDaysInMonth(date: Dayjs) {
  const startOfMonth = date.startOf('month');
  const startOfNextMonth = date.add(1, 'month').startOf('month');
  return startOfNextMonth.diff(startOfMonth, 'day');
}

// 이전달 일요일부터 오늘까지의 날짜까지에 대한 트래쉬값 생성 ex) [0, 0], [0]
export function getPrevDayTrash(date: Dayjs) {
  const DEFAULT_TRASH_VALUE = 0;
  const firstDayOfMonth = date.startOf('month');
  const daysToSunday = firstDayOfMonth.day(); // dayjs에서 day()는 0 (일요일)부터 6 (토요일)까지의 요일을 반환

  return Array.from({ length: Math.max(0, daysToSunday) }).map(() => DEFAULT_TRASH_VALUE);
}

// 특정 달의 캘린더 줄 수를 계산하는 함수
const getCalendarRows = (date: Dayjs) => {
  // 주어진 date 객체의 연도와 월의 첫 번째 날
  const firstDayOfMonth = date.startOf('month');
  // 해당 달의 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ... 6: 토요일)
  const startDayOfWeek = firstDayOfMonth.day();
  // 해당 달의 총 일수
  const daysInMonth = firstDayOfMonth.daysInMonth();

  // 달력의 총 셀 수 (첫 주 시작 전 공백 + 해당 달의 일수)
  const totalCells = startDayOfWeek + daysInMonth;

  // 달력의 총 줄 수 (7일이 한 줄이므로 나눗셈의 올림값)
  const totalRows = Math.ceil(totalCells / 7);

  return totalRows;
};

// 특정 달의 캘린더를 2차원 튜플로 반환 => ex) [[0,0,0,1,2,3,4],[5,6,7,8,9,10,11,12] ...]]
export function getCalendarData(year: number, month: number) {
  const date = dayjs().year(year).month(month);
  const CALENDER_LENGTH = getCalendarRows(date) * 7; // 총 캘린더의 칸수
  const DEFAULT_TRASH_VALUE = 0;
  const DAY_OF_WEEK = 7;
  const daysInMonth = getTotalDaysInMonth(date);
  const prevDayEmptyList = getPrevDayTrash(date);

  // 이번달에 포함된 날짜 모두 출력 ex) 1,2,3,...31
  const currentDayList = Array.from({ length: daysInMonth }).map((_, i) => i + 1);

  // 다음달에 포함될 트래쉬값 생성 ex) [0, 0, 0]
  const nextDayEmptyList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayEmptyList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  // 날짜에 대한 1차원 튜플 생성
  const currentCalendarList = prevDayEmptyList.concat(currentDayList, nextDayEmptyList);

  // 1차원 튜플 => 2차원 튜플
  const calendarList = currentCalendarList.reduce((acc: number[][], cur, index) => {
    const chunkIndex = Math.floor(index / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  return { calendarList, prevDayEmptyList, nextDayEmptyList };
}

export function isNumeric(str: string) {
  // Number로 변환한 값이 NaN인지 아닌지 확인
  const num = Number(str);
  return !isNaN(num) && typeof num === 'number';
}
