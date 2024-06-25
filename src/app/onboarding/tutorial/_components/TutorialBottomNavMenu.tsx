'use client';

import style from './tutorialBottomNavMenu.module.scss';
import Image from 'next/image';
import React from 'react';
import cx from 'classnames';

type Props = {
  tutorialStep: number;
};

export default function TutorialBottomNavMenu({ tutorialStep }: Props) {
  if (tutorialStep === 7) {
    return (
      <>
        <div className={cx(style.tutorialNav, style.dim)}>
          <li style={{ opacity: 0 }}>
            <div className={style.selected}>
              <div className={style.image}>
                <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
              </div>
              <div>탕비실</div>
            </div>
          </li>
          <li className={style.dim}>
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
        <PantryFocus />
      </>
    );
  }

  return (
    <div className={cx(style.tutorialNav, style.dim)}>
      <li>
        <div>
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

function PantryFocus() {
  return (
    <div className={cx(style.selected, style.pantryFocus)}>
      <div className={style.inner}>
        <div className={style.image}>
          <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
        </div>
        <div>탕비실</div>
      </div>
    </div>
  );
}
