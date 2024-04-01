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
