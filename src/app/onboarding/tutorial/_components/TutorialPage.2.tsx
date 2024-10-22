import styles from './tutorial.module.scss';
import Image from 'next/image';
import React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { findMonday, findSunday, formatDateToTodayDate } from '@/utils/utils';

type Prop = {
  setTutorialStep: Function;
};

export default function Tutorial1({ setTutorialStep }: Prop) {
  return (
    <>
      <div className={cx(styles.tutorial, styles.dim)}>
        <MyMallowHeader />
        <div className={styles.tutorialBody}>
          <div className={styles.topCarousel}>
            <div className={styles.pagination}>
              <p>1/10</p>
            </div>
          </div>
          <div className={styles.todayArea}>
            <div className={styles.myIcon}>
              <div className={styles.nameRank}>{`인턴\n`}</div>
              <div className={styles.name}>{`홍길동`}</div>
              <Image src="/images/mallow.happy.v2.svg" alt="No Image" width={120} height={102} />
            </div>
            <TodayMission />
          </div>
          <WeekAttendance />

          <div className={styles.enjoy}>
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
    <div className={styles.myMallowHeaderArea}>
      <div className={styles.logo}>
        <Image src="/images/logo.svg" alt="No Image" fill />
      </div>
      <div className={styles.myMallow}>
        <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
        <p>0</p>
      </div>
    </div>
  );
}

function TodayMission() {
  return (
    <div className={styles.todayMission}>
      <div className={styles.header}>
        <p className={styles.title}>오늘의 업무</p>
        <p className={styles.date}>{formatDateToTodayDate(new Date())}</p>
      </div>

      <div className={styles.missionTime}>
        <div className={cx(styles.row, cx(styles.active))}>
          <p className={styles.name}>출근</p>
          <p className={styles.time}>09:00 ~ 09:15</p>
          <MissionBox state={'Soon'} quantity={0} />
        </div>
        <div className={cx(styles.row)}>
          <p className={styles.name}>점심</p>
          <p className={styles.time}>12:00 ~ 12:15</p>
          <MissionBox state={'NotYet'} quantity={0} />
        </div>
        <div className={cx(styles.row)}>
          <p className={styles.name}>퇴근</p>
          <p className={styles.time}>18:00 ~ 18:15</p>
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
        <div className={cx(styles.missionBox, styles.failed)}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
          <p>+{quantity}</p>
        </div>
      );
    } else {
      return (
        <div className={cx(styles.missionBox, styles.success)}>
          <Image src="/images/snack.gray.svg" alt="No Image" width={20} height={20} />
          <p>+{quantity}</p>
        </div>
      );
    }
  }

  if (state === 'NotYet' || state === 'Soon') {
    return (
      <div className={styles.missionBox}>
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
    <div className={styles.attendance}>
      <div className={styles.header}>
        <p className={styles.name}>근태 관리</p>
        <p className={styles.date}>{`${mondayTime.format('YYYY.MM.DD')} ~ ${sundayTime.format('YYYY.MM.DD')}`}</p>
        <div className={styles.image}>
          <Image src="/images/arrow.gray.right.v2.svg" alt="No Image" width={24} height={24} />
        </div>
      </div>

      <div className={styles.weekMissions}>
        {daysArray.map((item, index) => {
          const dayIndex = dayjs().day() === 0 ? 6 : dayjs().day() - 1;

          return (
            <div className={styles.col} key={index}>
              <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
              <p>{item}</p>
              {index === dayIndex && <div className={styles.blackDot}></div>}
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
    <div className={cx(styles.timeCheckArea, styles.focus)}>
      <div className={styles.timerTime}>09:00:00</div>
      <div className={styles.timeDetail}>
        <p>
          <span>지금 마시멜로우를 획득하세요!</span>
        </p>
      </div>
      <div className={styles.checkWorkButton} style={{ cursor: 'pointer' }} onClick={() => setTutorialStep(3)}>
        <Image src="/images/mallow.black.happy.svg" alt="No Image" width={100} height={100} />
      </div>
    </div>
  );
}

function TutorialMessageBox() {
  return (
    <div className={cx(styles.tutorialMessageBoxContainer, styles.tutorial2)}>
      <div className={styles.tutorialMessageBox}>
        <p>{'출근시간이에요! 15분이 지나기 전에 ‘버튼’을 눌러주세요!'}</p>
      </div>
    </div>
  );
}

function GuideFinger() {
  return (
    <div className={cx(styles.guideFinger, styles.tutorial2)}>
      <Image src="/images/guide.finger.svg" alt="No Image" width={79} height={84} />
    </div>
  );
}
