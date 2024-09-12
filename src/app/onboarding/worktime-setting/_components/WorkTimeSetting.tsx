import React, { useState } from 'react';
import styles from '../page.module.scss';
import WorkTimeConfirmPopup from '@/app/onboarding/worktime-setting/_components/WorkTimeConfirmPopup';

export default function WorkTimeSetting() {
  const [modifyOfficeHourId, setModifyOfficeHourId] = useState<number>(1);
  const [isSelectTime, setIsSelectTime] = useState(false);
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyOfficeHourId(parseInt(e.target.value));
  };

  return (
    <div className={styles.workTimeSetting}>
      {isSelectTime ? (
        <WorkTimeConfirmPopup modifyOfficeHourId={modifyOfficeHourId} setIsSelectTime={setIsSelectTime} />
      ) : (
        <WorkTimeSelectPopup
          modifyOfficeHourId={modifyOfficeHourId}
          handleRadioChange={handleRadioChange}
          setIsSelectTime={setIsSelectTime}
        />
      )}
    </div>
  );
}

function WorkTimeSelectPopup({ handleRadioChange, modifyOfficeHourId, setIsSelectTime }: any) {
  return (
    <div className={styles.workTimeSelectPopup}>
      <p className={styles.title}>{'원하는 근무시간을 선택해주세요.\n근무시간에 따라 업무시간이 달라져요.'}</p>
      <p className={styles.description}>
        {'최종 변경 이후 7일이 지나야 변경 가능합니다.\n* 08시~ 19시 중에는 변경이 불가능합니다.'}
      </p>

      <div className={styles.workTimeSelect}>
        <div className={styles.item}>
          <div className={styles.checkArea}>
            <div>08시 ~ 17시</div>
            <label className={styles.label}>
              <input
                onChange={handleRadioChange}
                type="radio"
                name={'worktime'}
                value={1}
                checked={modifyOfficeHourId === 1}
              />
              <span className={styles.radioInnerCircle}></span>
            </label>
          </div>

          <div className={styles.info}>
            <div>정시출근: 08:00 ~ 08:15</div>
            <div>점심시간: 11:00 ~ 11:15</div>
            <div>정시퇴근: 15:00 ~ 15:15</div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.checkArea}>
            <div>09시 ~ 18시</div>
            <label className={styles.label}>
              {/*<input onChange=handleRadioChange type="checkbox" onChange={onChange} checked={checked} />*/}
              <input
                onChange={handleRadioChange}
                type="radio"
                name={'worktime'}
                value={2}
                checked={modifyOfficeHourId === 2}
              />
              <span className={styles.radioInnerCircle}></span>
            </label>
          </div>

          <div className={styles.info}>
            <div>정시출근: 09:00 ~ 09:15</div>
            <div>점심시간: 12:00 ~ 12:15</div>
            <div>정시퇴근: 16:00 ~ 16:15</div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.checkArea}>
            <div>10시 ~ 19시</div>
            <label className={styles.label}>
              <input
                onChange={handleRadioChange}
                type="radio"
                name={'worktime'}
                value={3}
                checked={modifyOfficeHourId === 3}
              />
              <span className={styles.radioInnerCircle}></span>
            </label>
          </div>

          <div className={styles.info}>
            <div>정시출근: 10:00 ~ 10:15</div>
            <div>점심시간: 13:00 ~ 13:15</div>
            <div>정시퇴근: 17:00 ~ 17:15</div>
          </div>
        </div>
      </div>

      <button className={styles.confirmButton} onClick={() => setIsSelectTime(true)}>
        확인
      </button>
    </div>
  );
}
