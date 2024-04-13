'use client';

import style from './withdraw.module.scss';
import ConfirmButton from '@/app/_components/common/ConfirmButton';
import React, { useCallback, useRef, useState } from 'react';
import { debounce } from '@/utils/utils';
import TopNavigation from '@/app/_components/common/TopNavigation';
import cx from 'classnames';
import { useRouter } from 'next/navigation';

export default function WithdrawPage() {
  const [text, setText] = useState<string>('');
  const textRef = useRef<HTMLTextAreaElement>(null!);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

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

  return (
    <div className={style.withdrawPage}>
      <TopNavigation isTitleExist={false} />
      <div className={style.main}>
        <div className={style.title}>{'OOO님\n탈퇴하는 이유가 무엇인가요?'}</div>
        <div className={style.description}>더욱 성장하는 마시멜로우가 될 수 있도록 의견을 남겨주세요.</div>
        <div className={style.reason}>
          <textarea ref={textRef} onChange={onChangeText} placeholder={'의견을 남겨주세요.'} />
        </div>
        <div
          className={cx(style.confirmButton, isActive && style.isActive)}
          onClick={() => router.push('/my/withdraw/confirm')}
        >
          확인
        </div>
      </div>
    </div>
  );
}
