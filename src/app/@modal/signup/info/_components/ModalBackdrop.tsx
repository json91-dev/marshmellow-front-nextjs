import styles from './modalBackdrop.module.scss';
import { ForwardedRef, forwardRef } from 'react';

const ModalBackdrop = forwardRef((props: any, ref?: ForwardedRef<HTMLDivElement>) => {
  return <div ref={!!ref ? ref : null} className={styles.container}></div>;
});

export default ModalBackdrop;
