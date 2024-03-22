'use client';
import style from './modal.module.scss';
import ModalBackdrop from '@/app/(beforeLogin)/signup/@modal/identify/_components/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useModalStore } from '@/store/modal';

export default function QuitInfoModal() {
  const { isShowQuitInfoModal, showQuitInfoModal } = useModalStore();

  return (
    <>
      <CSSTransition in={isShowQuitInfoModal} timeout={200} unmountOnExit>
        <ModalBackdrop />
      </CSSTransition>

      <CSSTransition in={isShowQuitInfoModal} timeout={200} unmountOnExit classNames="modal">
        <div className={style.modal}>
          <div className={style.title}>정말 나가실건가요?</div>
          <div className={style.description}>
            지원정보 작성을 중단하시면 입력된 정보들은 저장되지 않고 받은 마시멜로우가 회수됩니다.
          </div>

          <div className={style.firstButton}>아니오</div>
          <div className={style.secondButton} onClick={() => showQuitInfoModal(false)}>
            다음에 작성할게요
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
