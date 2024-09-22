'use client';

import styles from './page.module.scss';
import React, { useCallback, useRef, useState } from 'react';
import { debounce, setLocalStorage } from '@/utils/utils';
import TopNavigation from '@/components/nav/TopNavigation';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import useMemberProfile from '@/api/queries/member/useMemberProfile';

export default function WithdrawPage() {
  const [text, setText] = useState<string>('');
  const textRef = useRef<HTMLTextAreaElement>(null!);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { data: profileResult, isLoading, isFetching } = useMemberProfile();

  const onChangeText = useCallback(
    debounce(() => {
      setText(textRef.current.value);
      if (textRef.current.value === '') {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }, 300),
    [text],
  );

  const onClickConfirm = useCallback(async () => {
    await setLocalStorage('withdrawalReason', textRef.current.value);
    router.push('/my/withdraw/confirm');
  }, []);

  return (
    <div className={styles.withdrawPage}>
      <TopNavigation />
      <div className={styles.main}>
        <div
          className={styles.title}
        >{`${profileResult?.data?.profile?.nickname ? profileResult?.data?.profile?.nickname : '회원'}님,\n탈퇴하는 이유가 무엇인가요?`}</div>
        <div className={styles.description}>더욱 성장하는 마시멜로우가 될 수 있도록 의견을 남겨주세요.</div>
        <div className={styles.reason}>
          <textarea ref={textRef} onChange={onChangeText} placeholder={'의견을 남겨주세요.'} />
        </div>
        <div className={cx(styles.confirmButton, isActive && styles.isActive)} onClick={onClickConfirm}>
          확인
        </div>
      </div>
    </div>
  );
}
