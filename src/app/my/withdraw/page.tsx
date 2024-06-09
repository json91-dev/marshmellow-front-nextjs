'use client';

import style from './withdraw.module.scss';
import React, { useCallback, useRef, useState } from 'react';
import { debounce, getLocalStorage, setLocalStorage } from '@/utils/utils';
import TopNavigation from '@/app/_components/common/TopNavigation';
import cx from 'classnames';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import { useRouter } from 'next/navigation';

export default function WithdrawPage() {
  const [text, setText] = useState<string>('');
  const textRef = useRef<HTMLTextAreaElement>(null!);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { data: profileResult, isLoading, isFetching } = useMemberProfileQuery();

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
    await setLocalStorage('withdrawReason', textRef.current.value);
    router.push('/my/withdraw/confirm');
  }, []);

  return (
    <div className={style.withdrawPage}>
      <TopNavigation />
      <div className={style.main}>
        <div className={style.title}>{`${profileResult?.data?.profile?.nickname}님,\n탈퇴하는 이유가 무엇인가요?`}</div>
        <div className={style.description}>더욱 성장하는 마시멜로우가 될 수 있도록 의견을 남겨주세요.</div>
        <div className={style.reason}>
          <textarea ref={textRef} onChange={onChangeText} placeholder={'의견을 남겨주세요.'} />
        </div>
        <div className={cx(style.confirmButton, isActive && style.isActive)} onClick={onClickConfirm}>
          확인
        </div>
      </div>
    </div>
  );
}
