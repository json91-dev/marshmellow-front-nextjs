import style from './loadingImage.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
function LoadingImage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Image
        src="/images/onboarding.1.png"
        alt={'No Image'}
        fill
        onLoadingComplete={() => setLoading(false)}
        className={cx(loading && style.hidden)}
      />
      {loading && (
        <div className={style.spinnerContainer}>
          <div className={style.spinner}>
            <div className={style.spinnerInner}></div>
          </div>
        </div>
      )}
    </>
  );
}
