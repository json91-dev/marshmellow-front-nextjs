import React from 'react';
import style from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.spinnerInner}></div>
    </div>
  );
};

export default Spinner;
