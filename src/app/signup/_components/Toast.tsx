'use client';
import style from './toast.module.scss';
import cx from 'classnames';
import { useEffect, useRef } from 'react';
import { useToastStore } from '@/store/toast';

export default function Toast() {
  const { isShow, showToast, message } = useToastStore();

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        showToast(false);
      }, 1000);
    }
  }, [isShow]);

  return (
    <div className={cx(style.container, isShow && style.active)} onClick={() => showToast(false)}>
      {message}
    </div>
  );
}
