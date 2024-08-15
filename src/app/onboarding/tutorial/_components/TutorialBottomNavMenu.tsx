'use client';

import styles from './tutorialBottomNavMenu.module.scss';
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
        <div className={cx(styles.tutorialNav, styles.dim)}>
          <li style={{ opacity: 0 }}>
            <div className={styles.selected}>
              <div className={styles.image}>
                <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
              </div>
              <div>탕비실</div>
            </div>
          </li>
          <li className={styles.dim}>
            <div className={styles.selected}>
              <div className={styles.image}>
                <Image src="/images/bottom.tab.office.svg" alt="No Image" width={24} height={24} />
              </div>
              <div>사무실</div>
            </div>
          </li>

          <li>
            <div>
              <div className={styles.image}>
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
    <div className={cx(styles.tutorialNav, styles.dim)}>
      <li>
        <div>
          <div className={styles.image}>
            <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
          </div>
          <div>탕비실</div>
        </div>
      </li>
      <li>
        <div className={styles.selected}>
          <div className={styles.image}>
            <Image src="/images/bottom.tab.office.svg" alt="No Image" width={24} height={24} />
          </div>
          <div>사무실</div>
        </div>
      </li>

      <li>
        <div>
          <div className={styles.image}>
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
    <div className={cx(styles.selected, styles.pantryFocus)}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
        </div>
        <div>탕비실</div>
      </div>
    </div>
  );
}
