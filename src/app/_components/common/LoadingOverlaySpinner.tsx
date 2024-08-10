'use client';
import React from 'react';
import style from './loaindgOverlaySpinner.module.scss';
import { useIsFetching } from '@tanstack/react-query';

const LoadingOverlaySpinner = () => {
  const isFetching = useIsFetching();

  if (!isFetching) {
    return null;
  }

  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}>
        <div className={style.spinnerInner}></div>
      </div>
    </div>
  );
};

export default LoadingOverlaySpinner;
