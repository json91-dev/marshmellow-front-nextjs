'use client';

import style from './genderSelect.module.scss'; // CSS 파일을 불러옵니다.
import cx from 'classnames';
import { useCallback, useState } from 'react';

export default function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState<string>('male');

  const selectGender = useCallback(
    (gender: string) => {
      setSelectedGender(gender);
    },
    [selectedGender],
  );

  return (
    <div className={style.container}>
      <div
        onClick={() => selectGender('male')}
        className={cx(style.genderOption, selectedGender === 'male' && style.selected)}
      >
        <div>남</div>
      </div>
      <div
        onClick={() => selectGender('female')}
        className={cx(style.genderOption, selectedGender === 'female' && style.selected)}
      >
        <div>여</div>
      </div>
    </div>
  );
}
