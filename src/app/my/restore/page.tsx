'use client';

import styles from './page.module.scss';
import React, { useCallback } from 'react';
import TopNavigation from '@/components/nav/TopNavigation';
import cx from 'classnames';

import buttonStyle from '@/moduleStyle/Button.module.scss';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import dayjs from 'dayjs';
export default function RestorePage() {
  const onClickConfirm = useCallback(async () => {}, []);
  const { data: session } = useSession();
  const deletionNickname = session?.deletionNickname;
  const deleteDate = session?.deleteDate;

  return (
    <div className={styles.restorePage}>
      <TopNavigation />
      <div className={styles.main}>
        <Image src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} />
        <div className={styles.title}>
          <p>{`${deletionNickname}로 입사한 이력이 있어요.\n계정을 재활성화 할까요?`}</p>
        </div>
        <div className={styles.description}>
          <p>
            {`${deleteDate} 일에 계정을 비활성화했습니다.\n`}
            {`${dayjs(deleteDate).add(1, 'month').format('YYYY-MM-DD')} 일 이후에는 마시멜로우 계정을 실수 또는 잘못하여 비활성화한 경우라도 더 이상 계정을 복구할 수 없습니다. “네, 재활성화할게요.”버튼을 클릭하면 비활성화 절차가 중단되고 계정이 재활성화됩니다.`}
          </p>
        </div>
      </div>

      <div className={buttonStyle.verticalButtonArea}>
        <div className={cx(buttonStyle.confirmButton, buttonStyle.active)} onClick={onClickConfirm}>
          네, 재활성화 할게요.
        </div>

        <div className={buttonStyle.cancelButton}>취소</div>
      </div>
    </div>
  );
}
