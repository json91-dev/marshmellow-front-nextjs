import style from './page.module.scss';
import buttonStyle from '@/app/_style/Button.module.scss';
import React from 'react';
import TopNavigationWithCancel from '@/app/_components/common/TopNavigationWithCancel';
import Image from 'next/image';
import cx from 'classnames';

export default function PantryResearchPage() {
  return (
    <div className={style.pantryResearchPage}>
      <TopNavigationWithCancel title={'탕비실 설문조사'} />
      <div className={style.scrollArea}>
        <p className={style.title}>
          {'해당 설문조사는 마시멜로우의\n'}
          {'복지 개선을 위해 진행되는 설문조사입니다.'}
        </p>
        <p className={style.description}>
          {'설문조사 문항은 총 6개입니다.\n'}
          {'예상 소요시간은 6분 입니다.'}
        </p>

        <div className={style.image}>
          <Image src="/images/research.pantry.survey.png" alt="No Image" width={324} height={340} />
        </div>
      </div>

      <div className={buttonStyle.buttonsArea}>
        <div className={cx(buttonStyle.confirmButton, buttonStyle.active)}>다음</div>
      </div>
    </div>
  );
}
