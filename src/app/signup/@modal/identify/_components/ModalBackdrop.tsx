'use client';
import style from './modalBackdrop.module.scss';
import { ForwardedRef, forwardRef, MouseEventHandler } from 'react';

interface ModalBackdropProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ModalBackdrop = forwardRef((props: ModalBackdropProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const { onClick } = props;

  return <div ref={!!ref ? ref : null} className={style.container} onClick={onClick || (() => {})}></div>;
});

export default ModalBackdrop;
