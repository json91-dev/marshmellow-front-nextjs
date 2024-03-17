'use client';
import style from './modal.module.scss';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useIdentifyStore } from '@/store/identify';

export default function ExistPhoneModal() {
  const { isOpenExistNumberModal, closeExistNumberModal } = useIdentifyStore();

  return (
    <>
      <CSSTransition in={isOpenExistNumberModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isOpenExistNumberModal} timeout={200} unmountOnExit classNames="modal">
        <div className={style.modal}>
          <div className={style.title}>해당 번호로 입사한 이력이 있습니다.</div>
          <div className={style.description}>
            000으로 입사한 이력이 있습니다. <br />
            000으로 로그인해주세요.
          </div>

          <div className={style.firstButton} onClick={closeExistNumberModal}>
            확인
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
