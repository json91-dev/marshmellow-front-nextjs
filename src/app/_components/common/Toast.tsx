'use client';
import style from './toast.module.scss';
import cx from 'classnames';
import { useEffect, useRef } from 'react';
import { useToastStore } from '@/store/toast';

export default function Toast() {
  const { message, closeToast, isOpen } = useToastStore();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeToast();
      }, 2000);
    }
  }, [isOpen]);

  return (
    <div className={cx(style.toast, isOpen && style.active)} onClick={() => closeToast()}>
      {message}
    </div>
  );
}
