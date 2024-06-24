import style from './tutorial.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { findMonday, findSunday, formatDateToTodayDate } from '@/utils/utils';

type Prop = {
  setTutorialStep: Function;
};

export default function Tutorial3({ setTutorialStep }: Prop) {
  return (
    <>
      <div className={cx(style.tutorial, style.dim)}>
        <MyMallowHeader />
        <div className={style.tutorialBody}>
          <div className={style.topCarousel}>
            <div className={style.pagination}>
              <p>1/10</p>
            </div>
          </div>
          <div className={style.todayArea} style={{ opacity: 0 }}>
            <div className={style.myIcon}>
              <div className={style.nameRank}>{`인턴\n`}</div>
              <div className={style.name}>{`홍길동`}</div>
              <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
            </div>
            <div className={style.todayMission}>
              <div className={style.header}>
                <p className={style.title}>오늘의 업무</p>
                <p className={style.date}>{formatDateToTodayDate(new Date())}</p>
              </div>

              <div className={style.missionTime}>
                <div className={cx(style.row, cx(style.active))}>
                  <p className={style.name}>출근</p>
                  <p className={style.time}>09:00 ~ 09:15</p>
                  <MissionBox state={'Soon'} quantity={0} />
                </div>
                <div className={cx(style.row)}>
                  <p className={style.name}>점심</p>
                  <p className={style.time}>12:00 ~ 12:15</p>
                  <MissionBox state={'NotYet'} quantity={0} />
                </div>
                <div className={cx(style.row)}>
                  <p className={style.name}>퇴근</p>
                  <p className={style.time}>18:00 ~ 18:15</p>
                  <MissionBox state={'NotYet'} quantity={0} />
                </div>
              </div>
            </div>
          </div>

          <WeekAttendance />

          <div className={style.enjoy}>
            <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
            <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
            <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
          </div>
        </div>
        <TimerMissionCheck />
      </div>
      <TodayAreaFocus />
      <TutorialMessageBox setTutorialStep={setTutorialStep} />
    </>
  );
}

function MyMallowHeader() {
  return (
    <div className={cx(style.myMallowHeaderArea, style.focus)}>
      <div className={style.logo}></div>
      <div className={style.myMallow}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>0</p>
      </div>
    </div>
  );
}

function MissionBox({ state, quantity }: any) {
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

/** 근태관리 화면 **/
function WeekAttendance() {
  const now = dayjs();
  const mondayTime = findMonday(now);
  const sundayTime = findSunday(now);
  const daysArray = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div className={style.attendance}>
      <div className={style.header}>
        <p className={style.name}>근태 관리</p>
        <p className={style.date}>{`${mondayTime.format('YYYY.MM.DD')} ~ ${sundayTime.format('YYYY.MM.DD')}`}</p>
        <div className={style.image}>
          <Image src="/images/arrow.gray.right.v2.svg" alt="No Image" width={24} height={24} />
        </div>
      </div>

      <div className={style.weekMissions}>
        {daysArray.map((item, index) => {
          const dayIndex = dayjs().day() === 0 ? 6 : dayjs().day() - 1;

          return (
            <div className={style.col}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>{item}</p>
              {index === dayIndex && <div className={style.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** 하단 타이머 **/
function TimerMissionCheck() {
  return (
    <div className={style.timeCheckArea}>
      <div className={style.timerTime}>09:00:00</div>
      <div className={style.timeDetail}>
        <p>
          <span>지금 마시멜로우를 획득하세요!</span>
        </p>
      </div>
      <div className={style.checkWorkButton} style={{ pointerEvents: 'none' }}>
        <Image src="/images/mallow.black.happy.svg" alt="No Image" width={100} height={100} />
      </div>
    </div>
  );
}

function TodayAreaFocus() {
  return (
    <div className={cx(style.todayArea, style.focus)}>
      <div className={cx(style.myIcon, style.dim)}>
        <div className={style.nameRank}>{`인턴\n`}</div>
        <div className={style.name}>{`홍길동`}</div>
        <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
      </div>
      <div className={style.todayMission}>
        <div className={style.header}>
          <p className={style.title}>오늘의 업무</p>
          <p className={style.date}>{formatDateToTodayDate(new Date())}</p>
        </div>

        <div className={style.missionTime}>
          <div className={cx(style.row)}>
            <p className={style.name}>출근</p>
            <p className={style.time}>09:00 ~ 09:15</p>
            <MissionBox state={'Complete'} quantity={1} />
          </div>
          <div className={cx(style.row, cx(style.active))}>
            <p className={style.name}>점심</p>
            <p className={style.time}>12:00 ~ 12:15</p>
            <MissionBox state={'NotYet'} quantity={0} />
          </div>
          <div className={cx(style.row)}>
            <p className={style.name}>퇴근</p>
            <p className={style.time}>18:00 ~ 18:15</p>
            <MissionBox state={'NotYet'} quantity={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TutorialMessageBox({ setTutorialStep }: any) {
  return (
    <div className={cx(style.tutorialMessageBoxContainer, style.tutorial4)}>
      <div className={style.tutorialMessageBox}>
        <p>{'출근 업무를 무사히 완료했어요. 오늘의 업무 현황은 여기서 쉽게 확인 가능해요'}</p>
        <button onClick={() => setTutorialStep(5)}>다음</button>
      </div>
    </div>
  );
}
