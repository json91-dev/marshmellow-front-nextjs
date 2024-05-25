'use client';
import style from '@/app/(main)/office/office.module.scss';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import { useWorkTodayQuery } from '@/app/_hook/queries/activity';
import useSecondUpdater from '@/app/_hook/useSecondUpdater';
import dayjs from 'dayjs';

const timerInfoStateDummy = {
  timerTimeString: '09:47:15',
  timerTimeState: 'idle',
  detailTimeString: '12분 45초',
  detailTimeState: 'idle', // idle, active, success
  isMissionTime: false,
};

export default function TimerMissionCheck() {
  return (
    <div className={style.timeCheckArea}>
      <TimerTime />
      <TimeDetail />
      <TimerCheckButton />
    </div>
  );
}
function TimerTime() {
  // const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfileQuery();
  const { data: workResult, isLoading: isLoadingWork, isFetching: isFetchingWork } = useWorkTodayQuery();

  const { time } = useSecondUpdater();
  const timerTimeState = useMemo(() => {
    if (!workResult) {
      return {
        state: 'idle',
        timerTimeString: dayjs(time).format('HH:mm:ss'),
      };
    }

    return {
      state: 'idle',
      timerTimeString: dayjs(time).format('HH:mm:ss'),
    };
  }, [time, workResult]);

  return <div className={style.timerTime}>{timerTimeState.timerTimeString}</div>;
}

function TimeDetail() {
  const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfileQuery();
  const { data: workResult, isLoading: isLoadingWork, isFetching: isFetchingWork } = useWorkTodayQuery();

  const detailTimeState = useMemo(() => {
    return {
      state: 'idle', // idle, active, success
      detailTimeString: '12분 45초',
    };
  }, []);

  const { state, detailTimeString } = detailTimeState;

  if (isLoadingWork || isLoadingProfile || isFetchingProfile || isFetchingWork) {
    return <></>;
  }

  if (state === 'idle') {
    return (
      <div className={style.timeDetail}>
        <p>
          정시출근까지 <span>{detailTimeString}</span> 남았어요
        </p>
      </div>
    );
  }

  if (state === 'active') {
    return (
      <div className={style.timeDetail}>
        <p>지금 마시멜로우를 획득하세요!</p>
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className={style.timeDetail}>
        <p>마시멜로우 획득 성공!</p>
      </div>
    );
  }
}

function TimerCheckButton() {
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
