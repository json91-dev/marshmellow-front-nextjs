'use client';
import styles from './modal.module.scss';
import useModalStore from '@/store/modalStore';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import cx from 'classnames';
import Image from 'next/image';

export default function FulfillAttendanceAlarmSettingModal() {
  const { isShowFulfillAttendanceAlarmSettingModal, showFulfillAttendanceAlarmSettingModal } = useModalStore();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return (
    <>
      <CSSTransition in={isShowFulfillAttendanceAlarmSettingModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShowFulfillAttendanceAlarmSettingModal}
        timeout={200}
        unmountOnExit
        classNames="modal"
        nodeRef={modalRef}
      >
        <div className={cx(styles.fulfillAttendanceAlarmCheckModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>
            {'알림 서비스가 필요하시군요?\n'}
            {'곧 출시 될 앱 서비스를 이용해주세요!'}
          </p>
          <Image className={styles.icon} src="/images/mallow.sad.2.svg" alt="No Image" width={72} height={72} />
          <p className={styles.description}>
            {'앱 서비스 런칭 시 오픈 알림을 받으시려면\n'}
            {'오픈알림 받기 버튼을 눌러주세요'}
          </p>
          <button className={styles.confirmButton} onClick={() => showFulfillAttendanceAlarmSettingModal(false)}>
            오픈알림 받기
          </button>
          <button className={styles.cancelButton} onClick={() => showFulfillAttendanceAlarmSettingModal(false)}>
            닫기
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
