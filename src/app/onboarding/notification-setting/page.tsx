'use client';
import styles from './page.module.scss';
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Checkbox from '@/components/forms/Checkbox';

export default function OnBoardingTimePage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.notification}>
      <div className={styles.messageBox}>
        <p className={styles.title}>알림을 받으면 마시멜로우를 더 쉽게 얻을 수 있어요!</p>
        <p className={styles.description}>
          {`알람을 사용해 업무시간을 놓치지 마세요!\n`}
          <span>알림 허용</span>
          {`을 누르면 알림을 받을 수 있어요.`}
        </p>
      </div>

      <div className={styles.alertBox}>
        <Image src="/images/alert.circle.svg" alt="No Image" width={100} height={100} />
        <div className={styles.allowAlert}>알림 허용</div>
      </div>

      <button className={styles.confirmButton}>네, 보내주세요!</button>
      <button className={styles.cancelButton}>다음에 받을게요.</button>

      <div className={styles.checkArea}>
        <Checkbox checked={checked} onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)} />
        <p className={styles.checkInfo}>
          {'혜택, 이벤트 알림도 받을게요.\n'}
          <span>지금 알림 설정을 하면 바로 마시멜로우 10개를 드려요!</span>
        </p>
      </div>
    </div>
  );
}

// function IosNotificationGuide() {
//   return (
//     <div className={styles.iosNotificationGuide}>
//       <div className={styles.steps}>
//         <p>{'홈화면에 추가해주세요. \n아주 간단해요!'}</p>
//         <div className={styles.item}>
//           <p>1. 브라우저 하단에 공유 버튼을 클릭해주세요.</p>
//           <Image src="/images/alert.circle.svg" alt="No Image" width={100} height={100} />
//         </div>
//
//         <div className={styles.item}>
//           <p>2. 홈 화면에 추가를 찾아서 클릭해주세요.</p>
//           <Image src="/images/alert.circle.svg" alt="No Image" width={100} height={100} />
//         </div>
//
//         <div className={styles.item}>
//           <p>3. 핸드폰 홈 화면에 추가된 앱을 실행해주세요.</p>
//           <Image src="/images/alert.circle.svg" alt="No Image" width={100} height={100} />
//         </div>
//       </div>
//
//       <div className={styles.leftIcon}>
//         <Image src="/images/arrow.left.svg" alt="No Image" width={24} height={24} />
//       </div>
//
//       <div className={'bottomMessageBox'}>
//         <p>요기에 있어요!</p>
//       </div>
//     </div>
//   );
// }
