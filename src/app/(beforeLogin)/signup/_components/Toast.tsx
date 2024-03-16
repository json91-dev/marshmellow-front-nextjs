'use client';
import style from './toast.module.scss';
import cx from 'classnames';
import { useEffect, useRef } from 'react';
import { useToastStore } from '@/store/toast';

export default function Toast() {
  const { isOpen, closeToast, message } = useToastStore();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeToast();
      }, 1000);
    }
  }, [isOpen]);

  return <div className={cx(style.container, isOpen && style.active)}>{message}</div>;
}
