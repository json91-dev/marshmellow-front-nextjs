import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import styles from './modal.module.scss';
import Image from 'next/image';
import HorizontalLine from '@/app/my/_components/HorizontalLine';
import React from 'react';
import useModalStore from '@/store/modalStore';

export default function RankingChartModal() {
  const { isShowRankingChartModal, showRankingChartModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowRankingChartModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowRankingChartModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={styles.rankingChartModal} ref={modalRef}>
          <div className={styles.inner}>
            <div className={styles.title}>마시멜로우 직급표</div>
            <div className={styles.header}>
              <div>직급</div>
              <div>기준</div>
            </div>
            <div className={styles.body}>
              <div className={styles.left}>
                <Image src="/images/ranking.mallow.yellow.svg" alt="No Image" width={68} height={68} />
                <div>인턴</div>
              </div>
              <div className={styles.right}>회원가입시</div>
            </div>

            <HorizontalLine color={'#E5E9F2'} height={'0.05rem'} />

            <div className={styles.body}>
              <div className={styles.left}>
                <Image src="/images/ranking.mallow.pink.svg" alt="No Image" width={68} height={68} />
                <div>사원</div>
              </div>
              <div className={styles.right}>누적 출근일 14일</div>
            </div>

            <div className={styles.description}>*등급 및 혜택은 더 추가될 예정입니다 :)</div>

            <button onClick={() => showRankingChartModal(false)} className={styles.confirmButton}>
              확인
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
