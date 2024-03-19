'use client';
import style from './modal.module.scss';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useModalStore } from '@/store/modal';

export default function QuitModal() {
  const { isOpenQuitModal, closeQuitModal } = useModalStore();

  return (
    <>
      <CSSTransition in={isOpenQuitModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isOpenQuitModal} timeout={200} unmountOnExit classNames="modal">
        <div className={style.modal}>
          <div className={style.title}>정말 나가실건가요?</div>
          <div className={style.description}>현재 입사지원을 중단하시면 입력된 정보들은 저장되지 않습니다.</div>

          <div className={style.firstButton}>계속 진행할게요!</div>
          <div className={style.secondButton} onClick={closeQuitModal}>
            다음에 지원할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
