'use client';
import style from './modal.module.scss';
import { useModalStore } from '@/store/modal';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/signup/@modal/identify/_components/ModalBackdrop';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import { useToastStore } from '@/store/toast';

export default function LuckyDrawResearchCompleteModal() {
  const { showLuckyDrawResearchCompleteModal, isShowLuckyDrawResearchCompleteModal } = useModalStore();
  const { openToast } = useToastStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const router = useRouter();

  const onClickConfirm = useCallback(() => {
    router.push('/recreation/luckydraw');
    openToast('행운의 뽑기 경품투표 이벤트에 참여되었습니다.!');
  }, []);

  return (
    <>
      <CSSTransition in={isShowLuckyDrawResearchCompleteModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowLuckyDrawResearchCompleteModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(style.luckyDrawResearchCompleteModal, 'modal')} ref={modalRef}>
          <p className={style.title}>입력하신 정보가 맞으신가요?</p>
          <div className={style.phoneInfoBox}>
            <p>연락처</p>
            <p>000-000-0000</p>
          </div>

          <button onClick={onClickConfirm} className={style.confirmButton}>
            확인
          </button>
          <button onClick={() => showLuckyDrawResearchCompleteModal(false)} className={style.cancelButton}>
            다시 입력하기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
