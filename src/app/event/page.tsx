'use client';
import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function EventPage() {
  const [activeTab, setActiveTab] = useState(0);

  // 탭 변경 함수
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={styles.eventPage}>
      <TopNavigation title={'이벤트'} />

      <div className={styles.tabHeaders}>
        <div className={`${styles.tab} ${activeTab === 0 ? styles.active : ''}`} onClick={() => handleTabClick(0)}>
          진행 중 이벤트
        </div>
        <div className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`} onClick={() => handleTabClick(1)}>
          종료된 이벤트
        </div>
      </div>
      {activeTab === 0 && <OngoingEvents />}
      {activeTab === 1 && <FinishedEvents />}
    </div>
  );
}

function OngoingEvents() {
  const router = useRouter();
  return (
    <div className={styles.events}>
      <div className={styles.eventItem} onClick={() => router.push('/event/attendance')}>
        <div className={styles.titleImage}>
          <Image src="/images/banner.event.full.attendance.png" alt="No Image" width={320} height={140} />
        </div>
        <div className={styles.subTitle}>
          <p className={styles.text}>{'[만근 이벤트] 한 달 동안 모든 업무를 완수한 열일러를 위한 이벤트'}</p>
          <div className={styles.badge}>
            <p className={styles.badgeText}>항시</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinishedEvents() {
  return <div className={styles.events}></div>;
}
