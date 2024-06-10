import React from 'react';
import style from './layout.module.scss';
import './global.scss';
import LeftZone from '@/app/_components/leftzone/LeftZone';
import AuthSession from '@/app/_components/AuthSession';
import RQProvider from '@/app/_components/RQProvider';
import Toast from '@/app/_components/common/Toast';

export const metadata = {
  title: '마쉬멜로우',
  description: '마쉬멜로우 사이트',
};

type Props = {
  children: React.ReactNode;
};
import localFont from 'next/font/local';
import OnboardingGuideModal from '@/app/_components/onboarding/OnboardingGuideModal';
const pretendard = localFont({ src: '../font/PretendardVariable.woff2' });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <AuthSession>
          <RQProvider>
            <div className={style.rootLayout}>
              <LeftZone />
              <div className={style.content}>
                {children}
                <Toast />
                <div id={'onboarding-guide-modal'} />
                <OnboardingGuideModal />
              </div>
              <div className={style.rightZone}></div>
            </div>
          </RQProvider>
        </AuthSession>
      </body>
    </html>
  );
}
