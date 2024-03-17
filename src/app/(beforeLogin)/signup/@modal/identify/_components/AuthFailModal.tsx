'use client';
import style from './modal.module.scss';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { useIdentifyStore } from '@/store/identify';
import { CSSTransition } from 'react-transition-group';
export default function AuthFailModal() {
  const { isOpenAuthFailModal, closeAuthFailModal } = useIdentifyStore();

  return (
    <>
      <CSSTransition in={isOpenAuthFailModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isOpenAuthFailModal} timeout={200} unmountOnExit classNames="modal">
        <div className={style.modal}>
          <div className={style.title}>본인인증에 실패했어요.</div>
          <div className={style.description}>
            본인인증에 실패했어요 <br />
            다시 시도해주세요
          </div>
          <div className={style.firstButton} onClick={closeAuthFailModal}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
