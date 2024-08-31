'use client';
import styles from './modalBackdrop.module.scss';
import { ForwardedRef, forwardRef, MouseEventHandler } from 'react';

interface ModalBackdropProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ModalBackdrop = forwardRef((props: ModalBackdropProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const { onClick } = props;

  return <div ref={!!ref ? ref : null} className={styles.container} onClick={onClick || (() => {})}></div>;
});

export default ModalBackdrop;
