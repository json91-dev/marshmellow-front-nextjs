import dayjs, { Dayjs } from 'dayjs';

export const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.iOS();
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

export function isMacintosh() {
  return navigator.platform.indexOf('Mac') > -1;
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
export const setLocalStorage = (key: string, value: string) => {
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
