'use client';

import style from './tutorialBottomNavMenu.module.scss';
import Image from 'next/image';
import React from 'react';
import cx from 'classnames';

type Props = {
  step: number;
};

export default function TutorialBottomNavMenu({ step }: Props) {
  return (
    <div className={cx(style.tutorialNav, style.dim)}>
      <li>
        <div className={cx(step === 7 && style.selected)}>
          <div className={style.image}>
            <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
          </div>
          <div>탕비실</div>
        </div>
      </li>
      <li>
        <div className={style.selected}>
          <div className={style.image}>
            <Image src="/images/bottom.tab.office.svg" alt="No Image" width={24} height={24} />
          </div>
          <div>사무실</div>
        </div>
      </li>

      <li>
        <div>
          <div className={style.image}>
            <Image src="/images/bottom.tab.desk.svg" alt="No Image" width={24} height={24} />
          </div>
          <div>내 책상</div>
        </div>
      </li>
    </div>
  );
}
