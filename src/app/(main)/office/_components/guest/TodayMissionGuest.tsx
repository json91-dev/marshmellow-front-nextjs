'use client';
import style from '@/app/(main)/office/office.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import useMinuteUpdater from '@/app/_hook/useMinuteUpdater';
import { useWorkTodayQuery } from '@/app/_hook/queries/activity';
import dayjs from 'dayjs';
import { formatDateToTodayDate, getWorkTimeRangeString } from '@/utils/utils';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

type workStateType = {
  active: boolean;
  quantity: number;
  state: 'Soon' | 'NotYet' | 'Complete' | 'Failed';
  workTimeRange: string;
  name: string;
};

/** 로그인 상태일때 Office => 오늘의 업무 화면 **/
export default function TodayMissionGuest() {
  const { time: currentTimeEveryMinute } = useMinuteUpdater();

  const todayDate = useMemo(() => {
    return formatDateToTodayDate(currentTimeEveryMinute);
  }, [currentTimeEveryMinute]);

  /** 현재 시간과 서버로부터 얻어온 근무시간을 비교후 오늘의 업무 상태 반환 **/
  const workState = useMemo<workStateType[]>(() => {
    if (!currentTimeEveryMinute) return [];
    const currentTime = dayjs(currentTimeEveryMinute);
    // 근무 시간 경계 계산
    const midnightDate = dayjs().startOf('day').toDate();
    const workTimeFinishDate = dayjs().hour(9).minute(15);
    const lunchTimeFinishDate = dayjs().hour(12).minute(15);
    const workEndTimeFinishDate = dayjs().hour(18).minute(15);
    const isWorkActive = currentTime.isBetween(midnightDate, workTimeFinishDate, 'minute', '[]');
    const isLunchActive = currentTime.isBetween(workTimeFinishDate, lunchTimeFinishDate, 'minute', '(]');
    const isWorkEndActive = currentTime.isBetween(lunchTimeFinishDate, workEndTimeFinishDate, 'minute', '(]');

    // 특정 시간 설정
    const nineSixteen = dayjs().hour(9).minute(16).second(0);
    const twelveSixteen = dayjs().hour(12).minute(16).second(0);
    const eighteenSixteen = dayjs().hour(18).minute(16).second(0);

    const isAfterOrSameNineSixteen = dayjs().isSameOrAfter(nineSixteen, 'second');
    const isAfterOrSameTwelveSixteen = dayjs().isSameOrAfter(twelveSixteen, 'second');
    const isAfterOrSameEighteenSixteen = dayjs().isSameOrAfter(eighteenSixteen, 'second');

    return [
      {
        active: isWorkActive,
        quantity: 0,
        state: isAfterOrSameNineSixteen ? 'Failed' : 'Soon',
        workTimeRange: '09:00 ~ 09:15',
        name: '출근',
      },
      {
        active: isLunchActive,
        quantity: 0,
        state: isAfterOrSameTwelveSixteen ? 'Failed' : 'Soon',
        workTimeRange: '12:00 ~ 12:15',
        name: '점심',
      },

      {
        active: isWorkEndActive,
        quantity: 0,
        state: isAfterOrSameEighteenSixteen ? 'Failed' : 'Soon',
        workTimeRange: '18:00 ~ 18:15',
        name: '퇴근',
      },
    ];
  }, [currentTimeEveryMinute]);

  return (
    <div className={style.todayMission}>
      <div className={style.header}>
        <p className={style.title}>오늘의 업무</p>
        <p className={style.date}>{todayDate}</p>
      </div>

      <div className={style.missionTime}>
        {workState?.map((item, index) => {
          const { quantity, state: missionState, workTimeRange, name } = item;

          return (
            <div key={index} className={cx(style.row, item.active && style.active)}>
              <p className={style.name}>{name}</p>
              <p className={style.time}>{workTimeRange}</p>
              <MissionBox state={missionState} quantity={quantity} />
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
type missionBoxProps = {
  state: 'Soon' | 'NotYet' | 'Complete' | 'Failed';
  quantity: number;
};

function MissionBox({ state, quantity }: missionBoxProps) {
  if (state === 'Complete' || state === 'Failed') {
    if (quantity === 0) {
      return (
        <div className={cx(style.missionBox, style.failed)}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
          <p>+{quantity}</p>
        </div>
      );
    } else {
      return (
        <div className={cx(style.missionBox, style.success)}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
          <p>+{quantity}</p>
        </div>
      );
    }
  }

  if (state === 'NotYet' || state === 'Soon') {
    return (
      <div className={style.missionBox}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
        <p>+?</p>
      </div>
    );
  }
}
