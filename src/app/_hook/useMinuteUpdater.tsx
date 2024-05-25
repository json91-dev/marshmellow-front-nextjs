import { useState, useEffect, useRef } from 'react';

const useMinuteUpdater = () => {
  const [time, setTime] = useState(new Date());
  const timeout = useRef<NodeJS.Timeout>(null!);

  useEffect(() => {
    const updateMinute = () => {
      setTime(new Date());
      // 다음 분의 시작 시점을 계산
      const now = new Date();
      // 현재 시간의 초를 ms로 계산 후 오차 범위 제거
      const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
      timeout.current = setTimeout(updateMinute, delay);
    };

    // 초기 호출
    updateMinute();

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timeout.current);
  }, []);

  return { time };
};

export default useMinuteUpdater;
