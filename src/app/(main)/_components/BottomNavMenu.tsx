'use client';

import styles from './bottomNavMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import cx from 'classnames';
export default function BottomNavMenu() {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <li>
        <Link href="/pantry">
          <div className={cx(pathname === '/pantry' && styles.selected)}>
            <div className={styles.image}>
              <Image src="/images/bottom.tab.pantry.svg" alt="No Image" width={24} height={24} />
            </div>
            <div>탕비실</div>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/office">
          <div className={cx(pathname === '/office' && styles.selected)}>
            <div className={styles.image}>
              <Image src="/images/bottom.tab.office.svg" alt="No Image" width={24} height={24} />
            </div>
            <div>사무실</div>
          </div>
        </Link>
      </li>

      <li>
        <Link href="/desk">
          <div className={cx(pathname === '/desk' && styles.selected)}>
            <div className={styles.image}>
              <Image src="/images/bottom.tab.desk.svg" alt="No Image" width={24} height={24} />
            </div>
            <div>내 책상</div>
          </div>
        </Link>
      </li>
    </div>
  );
}
