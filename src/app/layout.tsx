import React, { Suspense } from 'react';
import styles from './layout.module.scss';
import './global.scss';
import LeftZone from '@/app/_components/leftzone/LeftZone';
import AuthSession from '@/lib/AuthSession';
import RQProvider from '@/lib/RQProvider';
import Toast from '@/components/common/Toast';

export const metadata = {
  title: '마쉬멜로우',
  description: '마쉬멜로우 사이트',
};

type Props = {
  children: React.ReactNode;
};
import localFont from 'next/font/local';
import OnboardingGuideModal from '@/app/_components/onboarding/OnboardingGuideModal';
import { MSWComponent } from '@/mocks/MSWComponent';
import LoadingOverlaySpinner from '@/components/common/LoadingOverlaySpinner';
const pretendard = localFont({ src: '../font/PretendardVariable.woff2' });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <MSWComponent>
          <AuthSession>
            <RQProvider>
              <div className={styles.rootLayout}>
                <LeftZone />
                <div className={styles.content}>
                  {children} {/* children 내의 컴포넌트들이 로딩되는 동안 로딩 스피너를 보여줌 */}
                  <Toast />
                  <div id={'onboarding-guide-modal'} />
                  <OnboardingGuideModal />
                  <LoadingOverlaySpinner />
                </div>
                <div className={styles.rightZone}></div>
              </div>
            </RQProvider>
          </AuthSession>
        </MSWComponent>
      </body>
    </html>
  );
}
