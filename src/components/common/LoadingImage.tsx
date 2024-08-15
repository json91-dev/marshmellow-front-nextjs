import styles from './loadingImage.module.scss';
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
        className={cx(loading && styles.hidden)}
      />
      {loading && (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}>
            <div className={styles.spinnerInner}></div>
          </div>
        </div>
      )}
    </>
  );
}
