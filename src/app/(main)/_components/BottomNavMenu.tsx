'use client';

import style from './bottomNavMenu.module.scss';
import Link from 'next/link';
export default function BottomNavMenu() {
  return (
    <div className={style.nav}>
      <li>
        <Link href="/pantry">
          <div className={style.menu}>
            <div>아이콘</div>
            <div>탕비실</div>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/office">
          <div>
            <div>아이콘</div>
            <div>사무실</div>
          </div>
        </Link>
      </li>

      <li>
        <Link href="/desk">
          <div>
            <div>아이콘</div>
            <div>내 책상</div>
          </div>
        </Link>
      </li>
    </div>
  );
}
