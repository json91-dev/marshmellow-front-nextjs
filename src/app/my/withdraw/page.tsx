'use client';

import style from './withdraw.module.scss';
import ConfirmButton from '@/app/_components/common/ConfirmButton';
import { useCallback } from 'react';

export default function withdrawPage() {
  const onClickButton = useCallback(() => {
    console.log('11');
  }, []);

  const onChangeText = useCallback(() => {}, []);

  return (
    <div className={style.container}>
      <div className={style.title}>OOO님 {'\n'} 탈퇴하는 이유가 무엇인가요?</div>
      <div className={style.description}>더욱 성장하는 마시멜로우가 될 수 있도록 의견을 남겨주세요.</div>
      <div className={style.reason}>
        <textarea onChange={onChangeText} placeholder={'의견을 남겨주세요.'} />
      </div>
      <ConfirmButton
        text={'다음 단계'}
        onClick={() => onClickButton()}
        isActive={false}
        customStyle={{ marginTop: '4rem;' }}
      />
      ;
    </div>
  );
}
