'use client';
import styles from './modal.module.scss';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalBackdrop from '@/app/@modal/signup/identify/_components/ModalBackdrop';
import useModalStore from '@/store/modalStore';
import cx from 'classnames';
import { getLocalStorage } from '@/utils/utils';
import useToastStore from '@/store/toastStore';
import { useQueryClient } from '@tanstack/react-query';
import useChangeNicknameMutation from '@/api/mutations/member/useChangeNicknameMutation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function OnboardingMissionCompleteModal() {
  const { showOnboardingMissionModal, isShowOnboardingMissionModal, onboardingMissionModalType } = useModalStore();
  const nickname = getLocalStorage('nickname');
  const { mutate } = useChangeNicknameMutation();
  const { openToast } = useToastStore();
  const queryClient = useQueryClient();
  const backdropRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const isShowModal = isShowOnboardingMissionModal;
  const router = useRouter();

  return (
    <>
      <CSSTransition in={isShowOnboardingMissionModal} timeout={200} unmountOnExit nodeRef={backdropRef}>
        <ModalBackdrop ref={backdropRef} />
      </CSSTransition>

      <CSSTransition in={isShowOnboardingMissionModal} timeout={200} unmountOnExit classNames="modal" nodeRef={modalRef}>
        <div className={cx(styles.onboardingMissionModal, 'modal')} ref={modalRef}>
          <p className={styles.title}>{`마시멜로우 + 3`}</p>
          <Image src="/images/mallow.happy.svg" alt="No Image" width={72} height={72} style={{ marginTop: '1rem' }} />
          <p className={styles.description}>
            {'적응 미션 임무 완수!\n'} {'마시멜로우 3개를 추가 보상으로 받았어요!'}
          </p>

          <button className={styles.confirmButton} onClick={() => router.push('/onboarding/mission')}>
            미션 보기
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => showOnboardingMissionModal(false, onboardingMissionModalType)}
          >
            확인
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
