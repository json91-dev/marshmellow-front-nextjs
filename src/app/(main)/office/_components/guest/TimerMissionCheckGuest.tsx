'use client';
import styles from '@/app/(main)/office/page.module.scss';
import Image from 'next/image';
import React, { useCallback, useMemo } from 'react';
import useSecondUpdater from '@/hooks/useSecondUpdater';
import cx from 'classnames';
import { findMissionDateMatchingStart } from '@/utils/utils';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';
import useModalStore from '@/store/modalStore';
import { useClick } from '@floating-ui/react';
import useWorkToday from '@/api/queries/work/useWorkToday';
import useMemberProfile from '@/api/queries/member/useMemberProfile';
import { CheckActiveButtonSVG } from '@/components/common/CheckActiveButtonSvg';
dayjs.extend(isBetween);
dayjs.extend(duration);

export default function TimerMissionCheckGuest() {
  const { data: workResult } = useWorkToday();

  const { time } = useSecondUpdater();
  const timerData = useMemo(() => {
    if (!workResult) {
      return {
        status: 'idle',
        timerTimeString: dayjs(time).format('HH:mm:ss'),
      };
    }

    // 다음 근무시간을 찾아서 상태 변경
    const { workStart, launch, workEnd } = workResult.data;
    const dates = [dayjs(workStart.start), dayjs(launch.start), dayjs(workEnd.start)];
    const now = dayjs();

    // 현재 시간과 가장 가까운 미션시간 찾기
    const closestMissionTime = dates.reduce((closest, date) => {
      const diffCurrent = Math.abs(date.diff(now));
      const diffClosest = Math.abs(closest.diff(now));

      return diffCurrent < diffClosest ? date : closest;
    });

    // 미션시작 시간 이후 15분 범위 찾기
    const closestMissionTimeData = findMissionDateMatchingStart(workResult.data, closestMissionTime);
    const isMissionTime = now.isBetween(
      closestMissionTime.subtract(1, 'minute'),
      closestMissionTime.add(15, 'minute'),
      'minute',
      '[]',
    );

    // 'Soon' | 'NotYet' | 'Complete' | 'Failed';
    let timerStatus;
    if (isMissionTime) {
      timerStatus = 'active';

      // 만약 미션시간동안 미션완료를 했다면 상태 원래대로 복귀
      const { state } = closestMissionTimeData;
      if (state === 'Complete') {
        timerStatus = 'complete';
      }
    } else {
      timerStatus = 'idle';
    }

    return {
      status: timerStatus,
      timerTimeString: dayjs(time).format('HH:mm:ss'),
    };
  }, [time, workResult]);

  const remainingTimeData = useMemo(() => {
    if (!workResult) {
      return {
        status: 'idle',
        remainingTimeString: '00분 00초',
        mission: '',
      };
    }

    const now = dayjs();
    const { workStart, launch, workEnd } = workResult.data;
    const workStartTime = dayjs(workStart.start);
    const lunchStartTime = dayjs(launch.start);
    const workEndTime = dayjs(workEnd.start);

    const workStartEndTime = dayjs(workStart.end);
    const lunchStartEndTime = dayjs(launch.end);
    const workEndEndTime = dayjs(workEnd.end);

    let remainingTimeStatus;

    if (now.isBetween(workStartTime, workStartEndTime, 'minute', '[]')) {
      if (workStart.state === 'Complete') {
        remainingTimeStatus = 'complete';
      } else {
        remainingTimeStatus = 'active';
      }

      return {
        status: remainingTimeStatus,
        remainingTimeString: '',
        mission: 'workStart',
      };
    }

    if (now.isBetween(lunchStartTime, lunchStartEndTime, 'minute', '[]')) {
      if (launch.state === 'Complete') {
        remainingTimeStatus = 'complete';
      } else {
        remainingTimeStatus = 'active';
      }

      return {
        status: remainingTimeStatus,
        remainingTimeString: '',
        mission: 'lunch',
      };
    }

    if (now.isBetween(workEndTime, workEndEndTime, 'minute', '[]')) {
      if (workEnd.state === 'Complete') {
        remainingTimeStatus = 'complete';
      } else {
        remainingTimeStatus = 'active';
      }

      return {
        status: remainingTimeStatus,
        remainingTimeString: '',
        mission: 'workEnd',
      };
    }

    const times = [workStartTime, lunchStartTime, workEndTime];
    const futureTimes = times.filter((time) => time.isAfter(now));
    const nextMissionTime = futureTimes.length > 0 ? futureTimes.reduce((a, b) => (a.isBefore(b) ? a : b)) : null;
    let remainingTimeString = '';

    if (nextMissionTime) {
      const diffInMillisSeconds = nextMissionTime.diff(now);
      const diffDuration = dayjs.duration(diffInMillisSeconds);
      const hour = diffDuration.hours();
      const minute = diffDuration.minutes();
      const seconds = diffDuration.seconds();

      if (hour > 0) {
        remainingTimeString = `${hour}시간 ${minute}분 ${seconds}초`;
      } else {
        remainingTimeString = `${minute}분 ${seconds}초`;
      }

      remainingTimeStatus = 'idle';
    } else {
      // 만약 현재 시간 이후 시간이 없다면 다음 날짜의 workStart 시간이 미션시간
      const nextWorkStartTime = workStartTime.add(1, 'day');
      const diffInMillisSeconds = nextWorkStartTime.diff(now);
      const diffDuration = dayjs.duration(diffInMillisSeconds);
      const hour = diffDuration.hours();
      const minute = diffDuration.minutes();
      const seconds = diffDuration.seconds();

      if (hour > 0) {
        remainingTimeString = `${hour}시간 ${minute}분 ${seconds}초`;
      } else {
        remainingTimeString = `${minute}분 ${seconds}초`;
      }

      remainingTimeStatus = 'idle';
    }

    return {
      status: remainingTimeStatus,
      remainingTimeString: remainingTimeString,
    };
  }, [time, workResult]);

  const missionCheckButtonData = useMemo(() => {
    if (!workResult) {
      return {
        status: 'idle', // idle, active, success
      };
    }

    const { workStart, launch, workEnd } = workResult.data;
    const dates = [dayjs(workStart.start), dayjs(launch.start), dayjs(workEnd.start)];
    // 현재 시간과 가장 가까운 미션시간 찾기
    const now = dayjs();
    const closestMissionTime = dates.reduce((closest, date) => {
      const diffCurrent = Math.abs(date.diff(now));
      const diffClosest = Math.abs(closest.diff(now));

      return diffCurrent < diffClosest ? date : closest;
    });

    const isMissionTime = now.isBetween(closestMissionTime, closestMissionTime.add(15, 'minute'), 'minute', '[]');
    const isMissionTimeInOneMinute = now.isBetween(closestMissionTime, closestMissionTime.add(1, 'minute'), 'second', '[]');
    const closestMissionTimeData = findMissionDateMatchingStart(workResult.data, closestMissionTime);
    // 'Soon' | 'NotYet' | 'Complete' | 'Failed';
    let checkButtonStatus;
    if (isMissionTime) {
      checkButtonStatus = 'active';
      const { state } = closestMissionTimeData;

      if (state === 'Complete') {
        checkButtonStatus = 'complete';
      }
    } else {
      checkButtonStatus = 'idle';
    }

    return {
      status: checkButtonStatus,
      isMissionTimeInOneMinute: isMissionTimeInOneMinute,
    };
  }, [time, workResult]);

  return (
    <div className={styles.timeCheckArea}>
      <TimerTime timerData={timerData} />
      <RemainingTimeInfo remainingTimeData={remainingTimeData} />
      <MissionCheckButton missionCheckButtonData={missionCheckButtonData} />
    </div>
  );
}

/** 타이머의 시간  **/
function TimerTime({ timerData }: any) {
  const { status, timerTimeString } = timerData;

  if (status === 'active') {
    return <div className={cx(styles.timerTime, styles.active)}>{timerTimeString}</div>;
  } else {
    return <div className={styles.timerTime}>{timerTimeString}</div>;
  }
}

/** 타이머 하단 정보 **/
function RemainingTimeInfo({ remainingTimeData }: any) {
  const { status, remainingTimeString } = remainingTimeData;

  if (status === 'idle') {
    return (
      <div className={styles.timeDetail}>
        <p>
          정시출근까지 <span>{remainingTimeString}</span> 남았어요
        </p>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className={cx(styles.timeDetail, styles.active)}>
        <p>지금 마시멜로우를 획득하세요!</p>
      </div>
    );
  }

  if (status === 'complete') {
    return (
      <div className={cx(styles.timeDetail, styles.active)}>
        <p>마시멜로우 획득 성공!</p>
      </div>
    );
  }
}

/** 미션 체크 버튼 **/
function MissionCheckButton({ missionCheckButtonData }: any) {
  const { status, isMissionTimeInOneMinute } = missionCheckButtonData;
  const { showAttendanceCheckModal } = useModalStore();
  const onClickAttendance = useCallback(() => {
    if (isMissionTimeInOneMinute) {
      showAttendanceCheckModal(true, true);
    } else {
      showAttendanceCheckModal(true, false);
    }
  }, [isMissionTimeInOneMinute]);

  if (status === 'idle' || status === 'complete') {
    return (
      <div className={styles.checkWorkButton}>
        <Image src="/images/mallow.sleep.circle.png" alt="No Image" width={100} height={100} />
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className={cx(styles.checkWorkButton, styles.active)} onClick={onClickAttendance}>
        <CheckActiveButtonSVG circleBgClassName={styles.circle} />
      </div>
    );
  }
}
