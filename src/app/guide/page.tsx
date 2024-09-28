'use client';
import styles from './page.module.scss';
import accordionStyle from './_components/accordiaon.module.scss';
import QuestionAccordion from './_components/QuestionAccordion';
import TopNavigation from '@/components/nav/TopNavigation';
import Link from 'next/link';
import useOnboardingMissionStatus from '@/api/queries/onboarding/useOnboardingMissionStatus';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import useModalStore from '@/store/modalStore';
import useOnboardingReadGuideMutation from '@/api/mutations/onboarding/useOnboardingReadGuideMutation';
import useToastStore from '@/store/toastStore';
import { useQueryClient } from '@tanstack/react-query';
import { faqData } from '@/constraints';

export default function GuidePage() {
  const { data: result, isSuccess } = useOnboardingMissionStatus();
  const { mutate } = useOnboardingReadGuideMutation();
  const { showOnboardingMissionModal } = useModalStore();
  const { openToast } = useToastStore();
  const queryClient = useQueryClient();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /** 가이드 미션 진행중인지 체크 **/
  const isDuringOnboardingDate = useMemo(() => {
    const missionStatus = result?.data;

    if (isSuccess && missionStatus) {
      return dayjs(missionStatus.period.endAt).isAfter(new Date());
    }
  }, [isSuccess]);

  useEffect(() => {
    // 온보딩 미션 기간 확인
    if (!isDuringOnboardingDate) return;

    // 데이터 패칭 확인
    const missionStatus = result?.data;
    if (isSuccess && missionStatus) {
      // 가이드 미션 종료 확인
      const isGuideMissionHasCompleted = missionStatus.onboardingMissionStates[3]?.isComplete; // (4번째 상태값이 가이드 미션 상태)
      if (isGuideMissionHasCompleted) return;

      mutate(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['activity', 'onboarding', 'mission'] }).then();
          showOnboardingMissionModal(true, 'MissionComplete');
        },
        onError: (error) => {
          console.log(error);
          openToast('에러');
        },
      });
    }
  }, [isDuringOnboardingDate, isSuccess]);

  return (
    <div className={styles.guidePage}>
      <TopNavigation title={'사용 가이드'} />

      <div className={styles.scrollArea}>
        <p className={styles.header}>자주 묻는 질문</p>
        {faqData.map((faq, index) => (
          <QuestionAccordion
            key={index}
            title={faq.title}
            isOpened={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.content}
          </QuestionAccordion>
        ))}
      </div>

      <div className={styles.bottomContact}>
        <p className={styles.info}>도움이 필요하신가요?</p>
        <Link className={styles.contactButton} href={'/request'}>
          <p>문의하기</p>
        </Link>
      </div>
    </div>
  );
}
