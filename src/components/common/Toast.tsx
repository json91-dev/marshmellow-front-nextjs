'use client';
import styles from './toast.module.scss';
import cx from 'classnames';
import { useEffect, useRef } from 'react';
import useToastStore from '@/store/toastStore';

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
    <div className={cx(styles.toast, isOpen && styles.active)} onClick={() => closeToast()}>
      <div className={styles.toastInner}>
        <p>{message}</p>
      </div>
    </div>
  );
}
