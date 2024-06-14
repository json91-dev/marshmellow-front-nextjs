'use client';
import style from './workTimeBottomSheet.module.scss';
import { useModalStore } from '@/store/modal';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMemberProfileQuery } from '@/app/_hook/queries/member';
import useBottomSheet from '@/app/_hook/useBottomSheet';

export default function WorkTimeBottomSheet() {
  const { isShowWorkTimeBottomSheet, showWorkTimeBottomSheet, showWorkTimeChangeModal } = useModalStore();
  const bottomSheetRef = useRef<HTMLDivElement>(null!);
  const backDropRef = useRef<HTMLDivElement>(null!);
  const [modifyOfficeHourId, setModifyOfficeHourId] = useState<number>(null!);
  const { data: result } = useMemberProfileQuery();

  const { closeBottomSheet } = useBottomSheet({
    bottomSheetRef,
    backDropRef,
    isShow: isShowWorkTimeBottomSheet,
    setIsShow: showWorkTimeBottomSheet,
  });

  useEffect(() => {
    if (result?.data && isShowWorkTimeBottomSheet) {
      const startHour = result.data.officeHour.startHour;
      console.log('시작시간', startHour);
      if (startHour === 8) {
        setModifyOfficeHourId(1);
      } else if (startHour === 9) {
        setModifyOfficeHourId(2);
      } else if (startHour === 10) {
        setModifyOfficeHourId(3);
      }
    }
  }, [result?.data, isShowWorkTimeBottomSheet]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyOfficeHourId(parseInt(e.target.value));
    // setSelectedWorkTime(e.target.value);
  };

  const onClickWorkTimeChange = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      closeBottomSheet();
      showWorkTimeChangeModal(true, modifyOfficeHourId);
    },
    [modifyOfficeHourId],
  );

  return (
    <>
      <CSSTransition in={isShowWorkTimeBottomSheet} timeout={200} unmountOnExit nodeRef={backDropRef}>
        <ModalBackdrop ref={backDropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowWorkTimeBottomSheet}
        timeout={200}
        classNames={'bottom-sheet'}
        unmountOnExit
        nodeRef={bottomSheetRef}
      >
        <div className={style.bottomSheet} ref={bottomSheetRef}>
          <div className={style.topLine} />

          <div className={style.title}>{'원하는 근무시작을 선택해주세요.\n근무시간에따라 업무시간이 달라져요.'}</div>
          <div className={style.description}>
            {'최종 변경 이후 7일이 지나야 변경 가능합니다.\n* 08시~19시 중에는 변경이 불가능합니다.'}
          </div>

          <div className={style.workTimeSelect}>
            <div className={style.item}>
              <div className={style.checkArea}>
                <div>08시 ~ 17시</div>
                <label className={style.label}>
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name={'worktime'}
                    value={1}
                    checked={modifyOfficeHourId === 1}
                  />
                  <span className={style.radioInnerCircle}></span>
                </label>
              </div>

              <div className={style.info}>
                <div>정시출근: 08:00 ~ 08:15</div>
                <div>점심시간: 11:00 ~ 11:15</div>
                <div>정시퇴근: 15:00 ~ 15:15</div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.checkArea}>
                <div>09시 ~ 18시</div>
                <label className={style.label}>
                  {/*<input onChange=handleRadioChange type="checkbox" onChange={onChange} checked={checked} />*/}
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name={'worktime'}
                    value={2}
                    checked={modifyOfficeHourId === 2}
                  />
                  <span className={style.radioInnerCircle}></span>
                </label>
              </div>

              <div className={style.info}>
                <div>정시출근: 09:00 ~ 09:15</div>
                <div>점심시간: 12:00 ~ 12:15</div>
                <div>정시퇴근: 16:00 ~ 16:15</div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.checkArea}>
                <div>10시 ~ 19시</div>
                <label className={style.label}>
                  {/*<input onChange=handleRadioChange type="checkbox" onChange={onChange} checked={checked} />*/}
                  <input
                    onChange={handleRadioChange}
                    type="radio"
                    name={'worktime'}
                    value={3}
                    checked={modifyOfficeHourId === 3}
                  />
                  <span className={style.radioInnerCircle}></span>
                </label>
              </div>

              <div className={style.info}>
                <div>정시출근: 10:00 ~ 10:15</div>
                <div>점심시간: 13:00 ~ 13:15</div>
                <div>정시퇴근: 17:00 ~ 17:15</div>
              </div>
            </div>
          </div>

          <div onClick={onClickWorkTimeChange} className={style.confirmButton}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
