import style from './tutorial.module.scss';
import Image from 'next/image';
import React, { useCallback } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { findMonday, findSunday, formatDateToTodayDate } from '@/utils/utils';
import { CheckActiveButtonSVG } from '@/app/(main)/office/_components/TimerMissionCheck';
import { useRouter } from 'next/navigation';

type Prop = {
  setTutorialStep: Function;
};

export default function Tutorial1({ setTutorialStep }: Prop) {
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
          <div className={style.todayArea}>
            <div className={style.myIcon}>
              <div className={style.nameRank}>{`인턴\n`}</div>
              <div className={style.name}>{`홍길동`}</div>
              <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
            </div>
            <TodayMission />
          </div>
          <WeekAttendance />

          <div className={style.enjoy}>
            <Image src="/images/enjoy.game.svg" alt="No Image" width={100} height={100} />
            <Image src="/images/enjoy.event.svg" alt="No Image" width={100} height={100} />
            <Image src="/images/enjoy.guide.svg" alt="No Image" width={100} height={100} />
          </div>
        </div>
      </div>

      <TimerMissionCheck setTutorialStep={setTutorialStep} />
      <TutorialMessageBox />
      <GuideFinger />
    </>
  );
}

function MyMallowHeader() {
  return (
    <div className={style.myMallowHeaderArea}>
      <div className={style.logo}></div>
      <div className={style.myMallow}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>0</p>
      </div>
    </div>
  );
}

function TodayMission() {
  return (
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
          return (
            <div className={style.col}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>{item}</p>
              {/*일요일*/}
              {dayjs().day() === 0 && index === 6 && <div className={style.blackDot}></div>}
              {/*월 ~ 토요일*/}
              {index === dayjs().day() - 1 && <div className={style.blackDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** 하단 타이머 **/
function TimerMissionCheck({ setTutorialStep }: any) {
  return (
    <div className={cx(style.timeCheckArea, style.focus)}>
      <div className={style.timerTime}>09:00:00</div>
      <div className={style.timeDetail}>
        <p>
          <span>지금 마시멜로우를 획득하세요!</span>
        </p>
      </div>
      <div className={style.checkWorkButton} onClick={() => setTutorialStep(3)}>
        <Image src="/images/mallow.black.happy.svg" alt="No Image" width={100} height={100} />
      </div>
    </div>
  );
}

function TutorialMessageBox() {
  return (
    <div className={cx(style.tutorialMessageBoxContainer, style.tutorial2)}>
      <div className={style.tutorialMessageBox}>
        <p>{'출근시간이에요! 15분이 지나기 전에 ‘버튼’을 눌러주세요!'}</p>
      </div>
    </div>
  );
}

function GuideFinger() {
  return (
    <div className={cx(style.guideFinger, style.tutorial2)}>
      <Image src="/images/guide.finger.svg" alt="No Image" width={79} height={84} />
    </div>
  );
}
