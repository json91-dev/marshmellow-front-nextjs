import style from './info.module.scss';
import InformationTab from '@/app/(beforeLogin)/signup/_components/InformationTab';
import React from 'react';

export default function SignUpInfo() {
  return (
    <div className={style.container}>
      <InformationTab index={2} />
      <div className={style.subscription}>
        <p>
          입사 지원서는 순서대로 기재 바랍니다. '최종제출' 버튼을 눌러야 입사 지원이 완료되오니 유의하시기 바랍니다.
        </p>
      </div>
    </div>
  );
}
