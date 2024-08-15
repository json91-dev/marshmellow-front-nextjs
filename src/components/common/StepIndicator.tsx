import styles from './stepIndocator.module.scss';
import cx from 'classnames';
import React, { CSSProperties } from 'react';

type props = {
  currentStep: number;
  totalSteps: number;
  customStyle?: CSSProperties;
};

export function StepIndicator({ currentStep = 1, totalSteps = 5, customStyle }: props) {
  return (
    <div className={styles.stepIndicator} style={{ ...customStyle }}>
      {[...Array(totalSteps)].map((_, index) => {
        return <div key={index} className={cx(styles.step, index <= currentStep - 1 && styles.active)}></div>;
      })}
    </div>
  );
}
