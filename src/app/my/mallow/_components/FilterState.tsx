'use client';

import style from '@/app/my/mallow/marshmallow.module.scss';
import cx from 'classnames';
import React from 'react';
import { MallowStateType } from '@/app/my/mallow/page';
import useMallowHistoryStore from '@/store/mallowHistoryStore';

export default function FilterState() {
  const { history, setHistoryFilterState } = useMallowStore();

  // 액션을 클릭할 때 호출되는 함수
  const handleActionClick = (action: MallowStateType) => {
    setHistoryFilterState(action); // 상태 업데이트
  };

  return (
    <div className={style.filterState}>
      <div
        className={cx(style.state, history.filterState === 'ALL' && style.active)}
        onClick={() => handleActionClick('ALL')}
      >
        전체
      </div>
      <div
        className={cx(style.state, history.filterState === 'GAIN' && style.active)}
        onClick={() => handleActionClick('GAIN')}
      >
        획득
      </div>
      <div
        className={cx(style.state, history.filterState === 'USE' && style.active)}
        onClick={() => handleActionClick('USE')}
      >
        사용
      </div>
      <div
        className={cx(style.state, history.filterState === 'EXPIRED' && style.active)}
        onClick={() => handleActionClick('EXPIRED')}
      >
        소멸
      </div>
    </div>
  );
}
