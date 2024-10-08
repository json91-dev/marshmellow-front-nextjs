'use client';

import styles from './confirmButton.module.scss';
import React, { CSSProperties, useCallback } from 'react';
import cx from 'classnames';

type Props = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
  customStyle?: CSSProperties;
};
export default function ConfirmButton(props: Props) {
  const { customStyle, text, onClick, isActive = true } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div className={cx(styles.confirmButton, isActive && styles.isActive)} style={customStyle} onClick={handleClick}>
      {text}
    </div>
  );
}
