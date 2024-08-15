import styles from './informationTab.module.scss';
import React from 'react';
import cx from 'classnames';

type Props = {
  index: number;
};

export default function InformationTab({ index }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <div className={cx(index === 1 && styles.activeBox)}>
          <p className={cx(index === 1 && styles.activeFont)}>1.본인인증 </p>
        </div>
        <div className={cx(index === 2 && styles.activeBox)}>
          <p className={cx(index === 2 && styles.activeFont)}>2.지원정보(선택)</p>
        </div>
        <div className={cx(index === 3 && styles.activeBox)}>
          <p className={cx(index === 3 && styles.activeFont)}>3.최종제출</p>
        </div>
      </div>

      <div className={styles.description}>
        입사 지원서는 순서대로 기재 바랍니다. '최종제출' 버튼을 눌러야 입사 지원이 완료되오니 유의하시기 바랍니다.
      </div>
    </div>
  );
}
