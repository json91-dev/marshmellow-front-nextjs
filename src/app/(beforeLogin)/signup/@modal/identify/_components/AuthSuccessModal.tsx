'use client';

import style from './modal.module.scss';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { useModalStore } from '@/store/modal';
import { CSSTransition } from 'react-transition-group';
export default function AuthSuccessModal() {
  const { isShowAuthSuccessModal, showAuthSuccessModal } = useModalStore();
  return (
    <>
      <CSSTransition in={isShowAuthSuccessModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowAuthSuccessModal} timeout={200} unmountOnExit classNames="modal">
        <div className={style.modal}>
          <div className={style.title}>
            본인인증이 완료되었습니다. <br />
            지원정보를 작성후 제출하시겠어요?
          </div>
          <div className={style.description}>
            지원정보를 작성해주시면 <br />
            마시멜로우 10개를 드려요!
          </div>

          <div className={style.firstButton}>지원 정보 작성하기</div>
          <div className={style.secondButton} onClick={() => showAuthSuccessModal(true)}>
            다음에 작성할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
