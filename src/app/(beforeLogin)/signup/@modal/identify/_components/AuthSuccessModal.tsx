'use client';

import style from './modal.module.scss';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { useIdentifyStore } from '@/store/identify';
import { CSSTransition } from 'react-transition-group';
export default function AuthSuccessModal() {
  const { isOpenAuthSuccessModal, closeAuthSuccessModal } = useIdentifyStore();
  return (
    <>
      <CSSTransition in={isOpenAuthSuccessModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isOpenAuthSuccessModal} timeout={200} unmountOnExit classNames="modal">
        <div className={style.modal}>
          <div className={style.title}>입사지원이 완료되었습니다.</div>
          <div className={style.description}>
            입사지원이 완료되었습니다. 지원정보를 작성해주시면 마시멜로우 10개를 드려요!
          </div>

          <div className={style.firstButton}>지원 정보 작성하기</div>
          <div className={style.secondButton} onClick={closeAuthSuccessModal}>
            다음에 작성할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
