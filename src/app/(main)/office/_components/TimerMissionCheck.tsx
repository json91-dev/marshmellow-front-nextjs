'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import { useWorkTodayQuery } from '@/app/_hook/queries/activity';
import useSecondUpdater from '@/app/_hook/useSecondUpdater';
import cx from 'classnames';
import { findMissionDateMatchingStart } from '@/utils/utils';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';
dayjs.extend(isBetween);
dayjs.extend(duration);

export default function TimerMissionCheck() {
  const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfileQuery();
  const { data: workResult, isLoading: isLoadingWork, isFetching: isFetchingWork } = useWorkTodayQuery();

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
    };
  }, [time, workResult]);

  return (
    <div className={style.timeCheckArea}>
      <TimerTime timerData={timerData} />
      <RemainingTimeInfo remainingTimeData={remainingTimeData} />
      <MissionCheckButton missionCheckButtonData={missionCheckButtonData} />
    </div>
  );
}
function TimerTime({ timerData }: any) {
  const { status, timerTimeString } = timerData;

  if (status === 'active') {
    return <div className={cx(style.timerTime, style.active)}>{timerTimeString}</div>;
  } else {
    return <div className={style.timerTime}>{timerTimeString}</div>;
  }
}

function RemainingTimeInfo({ remainingTimeData }: any) {
  const { status, remainingTimeString } = remainingTimeData;

  if (status === 'idle') {
    return (
      <div className={style.timeDetail}>
        <p>
          정시출근까지 <span>{remainingTimeString}</span> 남았어요
        </p>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className={cx(style.timeDetail, style.active)}>
        <p>지금 마시멜로우를 획득하세요!</p>
      </div>
    );
  }

  if (status === 'complete') {
    return (
      <div className={cx(style.timeDetail, style.active)}>
        <p>마시멜로우 획득 성공!</p>
      </div>
    );
  }
}

function MissionCheckButton({ missionCheckButtonData }: any) {
  const { status } = missionCheckButtonData;

  if (status === 'idle' || status === 'complete') {
    return (
      <div className={style.checkWorkButton}>
        <Image src="/images/mallow.sleep.circle.png" alt="No Image" width={100} height={100} />
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className={style.checkWorkButton}>
        <CheckActiveButtonSVG circleBgClassName={style.circle} />
      </div>
    );
  }
}

const CheckActiveButtonSVG = ({ circleBgClassName }: any) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_799_27919)">
        <circle cx="52" cy="50" r="48" fill="black" className={circleBgClassName} />
      </g>
      <rect x="28.7" y="26.7" width="46.6" height="46.6" rx="9.3" fill="white" stroke="#5C6475" strokeWidth="1.4" />
      <path
        d="M43.5716 41.5714C43.5716 42.4393 42.868 43.1429 42.0001 43.1429C41.1323 43.1429 40.4287 42.4393 40.4287 41.5714C40.4287 40.7036 41.1323 40 42.0001 40C42.868 40 43.5716 40.7036 43.5716 41.5714Z"
        fill="#1C222B"
      />
      <path
        d="M55.5716 41.5714C55.5716 42.4393 54.868 43.1429 54.0001 43.1429C53.1323 43.1429 52.4287 42.4393 52.4287 41.5714C52.4287 40.7036 53.1323 40 54.0001 40C54.868 40 55.5716 40.7036 55.5716 41.5714Z"
        fill="#1C222B"
      />
      <path
        d="M46.263 49.059L45.7478 48.4648C45.5779 48.2688 45.6017 47.9714 45.8008 47.805L47.6288 46.2769C47.7975 46.1359 48.042 46.1327 48.2143 46.2692L49.95 47.6441C50.1509 47.8033 50.1846 48.0953 50.0252 48.2961L49.4749 48.9893C48.6623 50.0131 47.1193 50.0465 46.263 49.059Z"
        fill="#FF6661"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.1022 45.095C44.3466 44.9423 44.6685 45.0166 44.8212 45.2609L46.0295 47.1941C46.0703 47.2595 46.1656 47.2595 46.2064 47.1941L47.4147 45.2609C47.51 45.1084 47.6773 45.0157 47.8571 45.0157C48.037 45.0157 48.2043 45.1084 48.2996 45.2609L49.5079 47.1941C49.5487 47.2595 49.644 47.2595 49.6848 47.1941L50.8931 45.2609C51.0458 45.0166 51.3677 44.9423 51.6121 45.095C51.8564 45.2477 51.9307 45.5696 51.778 45.814L50.5697 47.7472C50.1201 48.4665 49.0725 48.4665 48.623 47.7472L47.8571 46.5219L47.0913 47.7472C46.6418 48.4665 45.5941 48.4665 45.1446 47.7472L43.9363 45.814C43.7836 45.5696 43.8579 45.2477 44.1022 45.095Z"
        fill="#1C222B"
      />
      <ellipse cx="39.5714" cy="44.8583" rx="2.57143" ry="1.42857" fill="#FBBAF9" />
      <ellipse cx="56.4284" cy="44.8583" rx="2.57143" ry="1.42857" fill="#FBBAF9" />
      <defs>
        <filter
          id="filter0_d_799_27919"
          x="0"
          y="0"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0592768 0 0 0 0 0.117402 0 0 0 0 0.230234 0 0 0 0.35 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_799_27919" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_799_27919" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
