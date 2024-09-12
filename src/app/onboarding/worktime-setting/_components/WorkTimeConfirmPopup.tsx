'use client';
import styles from '@/app/onboarding/worktime-setting/page.module.scss';
import React, { useCallback } from 'react';
import useWorkTimeChangeMutation from '@/api/mutations/member/useWorktimeChangeMutation';
import useToastStore from '@/store/toastStore';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

type props = {
  setIsSelectTime: Function;
  modifyOfficeHourId: number;
};

export default function WorkTimeConfirmPopup({ setIsSelectTime, modifyOfficeHourId }: props) {
  const { mutate } = useWorkTimeChangeMutation();
  const queryClient = useQueryClient();
  const { openToast } = useToastStore();
  const router = useRouter();

  const workTimeChange = useCallback((id: number) => {
    mutate(id, {
      onSuccess: () => {
        openToast('내 근무시간이 변경되었어요.');
        queryClient.invalidateQueries({ queryKey: ['work', 'today'] }).then();
        queryClient.invalidateQueries({ queryKey: ['me', 'profile'] }).then();
      },
      onError: () => {
        openToast('이미 근무시간이 변경되었어요.');
      },
      onSettled: () => {
        router.push('/onboarding/tutorial');
      },
    });
  }, []);

  return (
    <div className={styles.workTimeConfirmPopup}>
      {modifyOfficeHourId === 1 && <p className={styles.title}>08시 ~ 17시로 하시겠어요?</p>}
      {modifyOfficeHourId === 2 && <p className={styles.title}>09시 ~ 18시로 하시겠어요?</p>}
      {modifyOfficeHourId === 3 && <p className={styles.title}>10시 ~ 19시로 하시겠어요?</p>}

      <p className={styles.description}>근무시간 확정 이후 7일이 지나야 변경 가능해요.</p>

      <button
        className={styles.confirmButton}
        style={{ marginTop: '2.4rem' }}
        onClick={() => workTimeChange(modifyOfficeHourId)}
      >
        확인
      </button>
      <button className={styles.cancelButton} onClick={() => setIsSelectTime(false)}>
        취소
      </button>
    </div>
  );
}
