'use client';

import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import Image from 'next/image';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import Checkbox from '@/components/common/Checkbox';
import useModalStore from '@/store/modalStore';
import { useMemberCurrencyQuery } from '@/api/queries/member';

export default function WithdrawConfirmPage() {
  const [checked, setChecked] = useState(false);
  const { showWithdrawConfirmModal } = useModalStore();
  const { data: currencyResult } = useMemberCurrencyQuery();

  const onClickWithdraw = useCallback(async () => {
    showWithdrawConfirmModal(true);
  }, []);

  return (
    <div className={styles.withdrawConfirmPage}>
      <TopNavigation />
      <div className={styles.main}>
        <div className={styles.topInfo}>
          <Image src="/images/mallow.sad.svg" alt="No Image" width={54} height={54} />
          <div className={styles.message}>탈퇴하기 전에 확인해주세요</div>
        </div>

        <div className={styles.items}>
          <div className={styles.name}>
            <Image src="/images/snack.gray.svg" alt="No Image" width={24} height={24} />
            <div>마시멜로우</div>
          </div>
          <div className={styles.count}>{currencyResult?.data?.marshmallowQuantity}개</div>
        </div>
        <p className={styles.warning}>
          계정을 삭제하면 보유하고 있는 마시멜로우와 응모권이 영구적으로 삭제되며 복구할 수 없습니다.
        </p>

        <div className={styles.terms}>
          <li>
            마시멜로우는 회원 탈퇴를 신청한 회원님의 계정을 30일간 보관하고 있습니다. 해당 기간 안에 로그인을 하신 회원님은
            별도의 신청 과정없이 회원 탈퇴가 철회되며 이전과 같이 마시멜로우를 자유롭게 이용할 수 있습니다.
          </li>
          <li>
            회원 탈퇴를 신청하신 회원님의 정보는 30일간 보관되지만 비활성화(암호화) 처리되어 마시멜로우 운영진도 접근이
            불가합니다. 마시멜로우는 회원님의 개인정보 보호에 앞장서겠습니다.
          </li>
          <li>
            회원 탈퇴 신청 후 30일동안 로그인이 없을 경우 회원님의 개인정보는 완전 삭제되며, 삭제 이후에는 개인정보를 포함한
            마시멜로우 내 모든 정보를 복원할 수 없습니다.
          </li>
        </div>

        <div className={styles.checkArea} onClick={() => setChecked(!checked)}>
          <Checkbox checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)} />
          <div className={styles.checkMessage}>위 내용을 이해했으며 동의합니다.</div>
        </div>

        <div className={cx(styles.confirmButton, checked && styles.isActive)} onClick={onClickWithdraw}>
          탈퇴하기
        </div>
      </div>
    </div>
  );
}
