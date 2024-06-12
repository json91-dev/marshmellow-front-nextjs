import style from './time-setting.module.scss';
import React from 'react';
import Welcome from '@/app/onboarding/worktime-setting/_components/Welcome';

export default function OnBoardingPage() {
  return (
    <div className={style.worktimeSettingPage}>
      <Welcome />
    </div>
  );
}
