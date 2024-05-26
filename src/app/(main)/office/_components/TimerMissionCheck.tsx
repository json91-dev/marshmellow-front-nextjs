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
        timerStatus = 'idle';
      }
    } else {
      timerStatus = 'idle';
    }

    return {
      status: timerStatus,
      timerTimeString: dayjs(time).format('HH:mm:ss'),
    };
  }, [time, workResult]);

  const detailTimeData = useMemo(() => {
    if (!workResult) {
      return {
        status: 'idle', // idle, active, success
        detailTimeString: '12분 45초',
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
    let detailTimeStatus;
    let detailTimeString = '';
    if (isMissionTime) {
      detailTimeStatus = 'active';

      // 만약 미션시간동안 미션완료를 했다면 상태 원래대로 복귀
      const { state } = closestMissionTimeData;
      if (state === 'Complete') {
        detailTimeStatus = 'complete';
      }
    } else {
      const diffInMillisSeconds = closestMissionTime.diff(now);
      const diffDuration = dayjs.duration(diffInMillisSeconds);
      const hour = diffDuration.hours();
      const minute = diffDuration.minutes();
      const seconds = diffDuration.seconds();

      if (hour > 0) {
        detailTimeString = `${hour}시간 ${minute}분 ${seconds}초`;
      } else {
        detailTimeString = `${minute}분 ${seconds}초`;
      }

      detailTimeStatus = 'idle';
    }

    return {
      status: detailTimeStatus,
      detailTimeString: detailTimeString,
    };
  }, [workResult, time]);

  return (
    <div className={style.timeCheckArea}>
      <TimerTime timerData={timerData} />
      <TimeDetail detailTimeData={detailTimeData} />
      <MissionCheckButton />
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

function TimeDetail({ detailTimeData }: any) {
  const { status, detailTimeString } = detailTimeData;

  if (status === 'idle') {
    return (
      <div className={style.timeDetail}>
        <p>
          정시출근까지 <span>{detailTimeString}</span> 남았어요
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

function MissionCheckButton() {
  const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfileQuery();
  const { data: workResult, isLoading: isLoadingWork, isFetching: isFetchingWork } = useWorkTodayQuery();

  if (isLoadingWork || isLoadingProfile || isFetchingProfile || isFetchingWork) {
    return <></>;
  }

  return (
    <div className={style.rightIcon}>
      <Image src="/images/mallow.sleep.circle.svg" alt="No Image" width={100} height={100} />
    </div>
  );
}
