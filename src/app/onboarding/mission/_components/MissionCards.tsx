import Image from 'next/image';
import React from 'react';
import styles from '../page.module.scss';

export function MissionCards() {
  return (
    <div className={styles.missionCards}>
      <div className={styles.missionCard}>
        <div className={styles.missionInfo}>
          <p className={styles.title}>사용자가이드 읽고오기</p>
          <p className={styles.description}>사용자 가이드 페이지 이동시 완료로 인정</p>
        </div>
        <div className={styles.missionCheckIcon}>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>

      <div className={styles.missionCard}>
        <div className={styles.missionInfo}>
          <p className={styles.title}>오늘의 업무 중 하나 완수하기</p>
          <p className={styles.description}>업무 완료로 마시멜로우 획득 시 완료로 인정</p>
        </div>
        <div className={styles.missionCheckIcon}>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>

      <div className={styles.missionCard}>
        <div className={styles.missionInfo}>
          <p className={styles.title}>레크레이션에서 뽑기 1회 참여</p>
          <p className={styles.description}>결과 상관없이 참여시 완료로 인정</p>
        </div>
        <div className={styles.missionCheckIcon}>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>

      <div className={styles.banner}>적응형 배너</div>

      <div className={styles.missionCard}>
        <div className={styles.missionInfo}>
          <p className={styles.title}>하루동안 오늘의 업무 3번 모두 완수하기</p>
          <p className={styles.description}>출근, 점심시간, 퇴근 업무 모두 완료 시 인정</p>
        </div>
        <div className={styles.missionCheckIcon}>
          <Image src="/images/snack.gray.light.svg" alt="No Image" width={24} height={24} />
          <p>미완료</p>
        </div>
      </div>
    </div>
  );
}
