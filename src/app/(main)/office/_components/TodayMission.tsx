'use client';
import styles from '@/app/(main)/office/page.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import React, { useMemo } from 'react';
import useMinuteUpdater from '@/hooks/useMinuteUpdater';
import dayjs from 'dayjs';
import { formatDateToTodayDate, getWorkTimeRangeString } from '@/utils/utils';
import isBetween from 'dayjs/plugin/isBetween';
import { useSession } from 'next-auth/react';
import TodayMissionGuest from '@/app/(main)/office/_components/guest/TodayMissionGuest';
import useWorkToday from '@/api/queries/work/useWorkToday';
import useMemberProfile from '@/api/queries/member/useMemberProfile';
dayjs.extend(isBetween);

type workStateType = {
  active: boolean;
  quantity: number;
  state: 'Soon' | 'NotYet' | 'Complete' | 'Failed';
  workTimeRange: string;
  name: string;
};

/** 로그인 상태일때 Office => 오늘의 업무 화면 **/
export default function TodayMission() {
  const { data: profileResult, isLoading: isLoadingProfile, isFetching: isFetchingProfile } = useMemberProfile();
  const { data: workResult, isLoading: isLoadingWork, isFetching: isFetchingWork } = useWorkToday();
  const { time: currentTimeEveryMinute } = useMinuteUpdater();

  const todayDate = useMemo(() => {
    return formatDateToTodayDate(currentTimeEveryMinute);
  }, [currentTimeEveryMinute]);

  /** 현재 시간과 서버로부터 얻어온 근무시간을 비교후 오늘의 업무 상태 반환 **/
  const workState = useMemo<workStateType[]>(() => {
    if (!workResult || !profileResult || !currentTimeEveryMinute) return [];
    const { startHour, launchTimeAt, endHour } = profileResult.data.officeHour;
    const currentTime = dayjs(currentTimeEveryMinute);

    // 근무 시간 경계 계산
    const midnightDate = dayjs().startOf('day').toDate();
    const workTimeFinishDate = dayjs().hour(startHour).minute(15);
    const lunchTimeFinishDate = dayjs().hour(launchTimeAt).minute(15);
    const workEndTimeFinishDate = dayjs().hour(endHour).minute(15);
    const isWorkActive = currentTime.isBetween(midnightDate, workTimeFinishDate, 'minute', '[]');
    const isLunchActive = currentTime.isBetween(workTimeFinishDate, lunchTimeFinishDate, 'minute', '(]');
    const isWorkEndActive = currentTime.isBetween(lunchTimeFinishDate, workEndTimeFinishDate, 'minute', '(]');

    const { workStart, launch, workEnd } = workResult.data;
    const { state: workState, quantity: workQuantity } = workStart;
    const { state: lunchState, quantity: lunchQuantity } = launch;
    const { state: workEndState, quantity: workEndQuantity } = workEnd;

    return [
      {
        active: isWorkActive,
        quantity: workQuantity,
        state: workState,
        workTimeRange: getWorkTimeRangeString(startHour),
        name: '출근',
      },
      {
        active: isLunchActive,
        quantity: lunchQuantity,
        state: lunchState,
        workTimeRange: getWorkTimeRangeString(launchTimeAt),
        name: '점심',
      },

      {
        active: isWorkEndActive,
        quantity: workEndQuantity,
        state: workEndState,
        workTimeRange: getWorkTimeRangeString(endHour),
        name: '퇴근',
      },
    ];
  }, [workResult, profileResult, currentTimeEveryMinute]);

  return (
    <div className={styles.todayMission}>
      <div className={styles.header}>
        <p className={styles.title}>오늘의 업무</p>
        <p className={styles.date}>{todayDate}</p>
      </div>

      <div className={styles.missionTime}>
        {workState?.map((item, index) => {
          const { quantity, state: missionState, workTimeRange, name } = item;

          return (
            <div key={index} className={cx(styles.missionRow, item.active && styles.active)}>
              <p className={styles.name}>{name}</p>
              <p className={styles.time}>{workTimeRange}</p>
              <MissionBox state={missionState} quantity={quantity} active={item.active} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// | Soon     | 다음에 다가올 미션    |
// | NotYet   | 아직 수행할 미션이 아님 |
// | Complete | 출석 성공         |
// | Failed   | 출석 실패         |
type mallowBoxProps = {
  state: 'Soon' | 'NotYet' | 'Complete' | 'Failed';
  quantity: number;
  active: boolean;
};

function MissionBox({ state, quantity, active }: mallowBoxProps) {
  if (state === 'Complete' || state === 'Failed') {
    if (quantity === 0) {
      return (
        <div className={cx(styles.mallowBox, active && styles.active, styles.failed)}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
          <p className={styles.mallowCount}>+{quantity}</p>
        </div>
      );
    } else {
      // Complete 상태일때
      return (
        <div className={cx(styles.mallowBox, active && styles.active, styles.success)}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
          <p className={styles.mallowCount}>+{quantity}</p>
        </div>
      );
    }
  }

  if (state === 'NotYet' || state === 'Soon') {
    return (
      <div className={cx(styles.mallowBox, active && styles.active)}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
        <p className={styles.mallowCount}>+?</p>
      </div>
    );
  }
}
