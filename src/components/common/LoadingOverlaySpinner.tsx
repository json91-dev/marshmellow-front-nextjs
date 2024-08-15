'use client';
import React from 'react';
import styles from './loaindgOverlaySpinner.module.scss';
import { useIsFetching } from '@tanstack/react-query';

const LoadingOverlaySpinner = () => {
  const isFetching = useIsFetching();

  if (!isFetching) {
    return null;
  }

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div className={styles.spinnerInner}></div>
      </div>
    </div>
  );
};

export default LoadingOverlaySpinner;
