'use client';

import styles from '@/app/my/mallow/page.module.scss';
import cx from 'classnames';
import React from 'react';
import { MallowStateType } from '@/app/my/mallow/page';
import useMallowHistoryStore from '@/store/mallowHistoryStore';

export default function FilterState() {
  const { history, setHistoryFilterState } = useMallowHistoryStore();

  // 액션을 클릭할 때 호출되는 함수
  const handleActionClick = (action: MallowStateType) => {
    setHistoryFilterState(action); // 상태 업데이트
  };

  return (
    <div className={styles.filterState}>
      <div
        className={cx(styles.state, history.filterState === 'ALL' && styles.active)}
        onClick={() => handleActionClick('ALL')}
      >
        전체
      </div>
      <div
        className={cx(styles.state, history.filterState === 'GAIN' && styles.active)}
        onClick={() => handleActionClick('GAIN')}
      >
        획득
      </div>
      <div
        className={cx(styles.state, history.filterState === 'USE' && styles.active)}
        onClick={() => handleActionClick('USE')}
      >
        사용
      </div>
      <div
        className={cx(styles.state, history.filterState === 'EXPIRED' && styles.active)}
        onClick={() => handleActionClick('EXPIRED')}
      >
        소멸
      </div>
    </div>
  );
}
