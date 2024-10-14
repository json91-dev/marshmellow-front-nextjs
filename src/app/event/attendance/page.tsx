'use client';
import styles from './page.module.scss';
import React, { useCallback } from 'react';
import Image from 'next/image';
import TopNavigationWithCancel from '@/components/nav/TopNavigationWithCancel';
import cx from 'classnames';
import { useSession } from 'next-auth/react';
import useModalStore from '@/store/modalStore';
const isCompleteAttendanceMission = false;

export default function FullAttendanceEventPage() {
  const { data: session } = useSession();
  const { showAttendanceEventInfoBottomSheet } = useModalStore();
  const onClickEventJoin = useCallback(() => {
    showAttendanceEventInfoBottomSheet(true);
  }, []);

  return (
    <div className={styles.fullAttendanceEventPage}>
      <TopNavigationWithCancel title={'이벤트'} />

      <div className={styles.scrollArea}>
        <header className={styles.titleImage}>
          <Image src="/images/event.full.attendance.png" alt="No Image" width={360} height={240} />
        </header>

        <main className={styles.eventDetail}>
          <section className={styles.badge}>
            <p className={styles.badgeText}>항시</p>
          </section>

          <section className={styles.title}>
            <h1 className={styles.name}>만근 이벤트</h1>
            <p className={styles.description}>한 달 동안 모든 업무를 완수한 열일러를 위한 이벤트</p>
          </section>

          <EventInfo title="이벤트 기간" description="매달 1일 ~ 매달 말일" />
          <EventInfo title="당첨 대상" description="한 달 동안 모든 업무를 완수해 이벤트에 참여한 모든 임직원분들" />
          <EventInfo title="이벤트 상품" description="마시멜로우 100개" />
          <EventInfo title="이벤트 상품 지급일" description="익월 15일" />
          <EventInfo
            title="이벤트 참여 방법"
            description={`1. 한 달 동안 하루 3번의 모든 업무를 완수해요.\n2. 매달 말일, 참여 조건에 해당한다면 자동으로 참여가 돼요.\n3. 한 달 동안 모든 업무를 완수하지 못했다면, 다음 달을 노려보세요!`}
          />

          <section className={styles.policy}>
            <p className={styles.header}>[유의사항]</p>
            <div className={styles.content}>
              <div className={styles.contentItem}>
                <p>1.</p>
                <p>만근 이벤트는 입사완료한 직원에 한해 참여하실 수 있습니다.</p>
              </div>
              <div className={styles.contentItem}>
                <p>2.</p>
                <p>이벤트 참여 조건에 만족할 시 자동으로 참여가 됩니다.</p>
              </div>
              <div className={styles.contentItem}>
                <p>3.</p>
                <p>부적절한 방법으로 이벤트에 참여한 경우, 참여 자격이 박탈되며 추후 이벤트 참여에 제한될 수 있습니다.</p>
              </div>
              <div className={styles.contentItem}>
                <p>4.</p>
                <p>운영사의 사정으로 사전 안내 없이 변경 및 중단될 수 있습니다.</p>
              </div>
              <div className={styles.contentItem}>
                <p>5.</p>
                <p>이벤트에 당첨되지 않은 경우 별도의 알림이 가지 않습니다.</p>
              </div>
              <div className={styles.verticalButtonArea}>
                <p>6.</p>
                <p>마시멜로우 지급 팝업이 나오더라도 실제 적립까지 시간이 소요될 수 있습니다.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className={styles.verticalButtonArea}>
        {isCompleteAttendanceMission ? (
          <div className={styles.messageBox}>
            <p className={styles.title}>한 달 동안 업무 3개를 모두 완수해서 자동 참여 완료되었어요!</p>
          </div>
        ) : (
          <></>
        )}

        <div
          onClick={onClickEventJoin}
          className={cx(styles.confirmButton, isCompleteAttendanceMission ? null : styles.active)}
        >
          {isCompleteAttendanceMission ? (
            <>
              <p>자동 참여 완료</p>
            </>
          ) : (
            <>
              <p>참여 조건 알아보기</p>
              <Image src="/images/arrow.right.white.svg" alt="No Image" width={24} height={24} />
            </>
          )}
        </div>
      </footer>
    </div>
  );
}

type EventInfoProps = {
  title: string;
  description: React.ReactNode;
};

function EventInfo({ title, description }: EventInfoProps) {
  return (
    <section className={styles.info}>
      <h3 className={styles.name}>{title}</h3>
      <div className={styles.descriptionBox}>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
