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
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 로컬 스토리지에서 값을 가져오는 함수
export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

// localStorage에서 값을 가져오는 함수. 값이 없는 경우 기본값을 반환합니다.
export function getLocalStorageItem(key: string, defaultValue = null) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error('localStorage에서 값을 가져오는 중 오류가 발생했습니다:', error);
    return defaultValue;
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
