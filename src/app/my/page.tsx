'use client';

import styles from './page.module.scss';
import TopNavigation from '@/app/my/_components/TopNavigation';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import HorizontalLine from '@/app/my/_components/HorizontalLine';
import useModalStore from '@/store/modalStore';
import { useRouter } from 'next/navigation';
import { formatHourMinute, phoneFomatter } from '@/utils/utils';
import { useMemberProfileQuery } from '@/hooks/queries/member';

export default function myPage() {
  const {
    showRankingChartModal,
    showNicknameChangeModal,
    showWorkTimeBottomSheet,
    showLogoutModal,
    showNicknameNotChangeByDateModal,
    setNicknameChangeRemainDays,
    showWorkTimeNotChangeByDateModal,
    setWorkTimeChangeRemainDays,
  } = useModalStore();
  const router = useRouter();
  const { data: result, isLoading, isFetching } = useMemberProfileQuery();

  const onClickNicknameChangeButton = useCallback(() => {
    if (result?.data) {
      const { isNicknameModifiable, nicknameModifiableRemainingDays } = result.data;

      if (isNicknameModifiable) {
        showNicknameChangeModal(true);
      } else {
        showNicknameNotChangeByDateModal(true);
        setNicknameChangeRemainDays(nicknameModifiableRemainingDays);
      }
    }
  }, [result]);

  const onClickWorkTimeChange = useCallback(() => {
    if (result?.data) {
      const { isOfficeHourModifiable, officeHourModifiableRemainingDays } = result.data;

      if (isOfficeHourModifiable) {
        showWorkTimeBottomSheet(true);
      } else {
        showWorkTimeNotChangeByDateModal(true);
        setWorkTimeChangeRemainDays(officeHourModifiableRemainingDays);
      }
    }
  }, [result]);

  return (
    <div className={styles.myPage}>
      <TopNavigation />
      <div className={styles.main}>
        <div className={styles.idCardInfo}>
          <div className={styles.title}>내 사원증</div>
          <div className={styles.description}>내 사원증의 정보입니다.</div>
        </div>

        <div className={styles.nickname}>
          <div className={styles.left}>닉네임</div>
          <div className={styles.right} onClick={onClickNicknameChangeButton}>
            <div>{result?.data?.profile?.nickname}</div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
          </div>
        </div>

        <div className={styles.level}>
          <div className={styles.left}>
            <div>직급</div>
            <Image
              onClick={() => showRankingChartModal(true)}
              src="/images/question.mark.svg"
              alt="No Image"
              width={18}
              height={18}
            />
          </div>
          <div className={styles.right}>{result?.data?.grade}</div>
        </div>

        <div className={styles.workTime}>
          <div className={styles.left}>근무시간</div>
          <div className={styles.right} onClick={() => onClickWorkTimeChange()}>
            <div className={styles.workTimeDetail}>
              {result?.data && (
                <>
                  <div>
                    {formatHourMinute(result.data.officeHour.startHour).substring(0, 2)}시 ~{' '}
                    {formatHourMinute(result.data.officeHour.endHour).substring(0, 2)}시
                  </div>
                  <div>점심시간은 {formatHourMinute(result.data.officeHour.launchTimeAt).substring(0, 2)}시입니다.</div>
                </>
              )}
            </div>
            <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
          </div>
        </div>

        <div className={styles.myEditInfo}>
          <div className={styles.left}>
            <div>내정보</div>
            <div>내 정보가 변경되었다면 본인확인을 통해 정보를 수정할 수 있습니다.</div>
          </div>
          <div className={styles.right}>
            <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
          </div>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.left}>이름</div>
          <div className={styles.right}>{result?.data?.profile?.name}</div>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.left}>성별</div>
          <div className={styles.right}>{result?.data?.profile?.gender}</div>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.left}>생년월일</div>
          <div className={styles.right}>{result?.data?.profile?.birth.replaceAll('-', '.')}</div>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.left}>연락처</div>
          <div className={styles.right}>{result?.data && phoneFomatter(result?.data?.profile?.phoneNumber)}</div>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />

          {/** 다음 버전에 추가 예정 **/}
          {/*<div className={styles.link} onClick={() => router.push('/my/address')}>*/}
          {/*  <div>배송지 관리</div>*/}
          {/*  <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />*/}
          {/*</div>*/}

          <div className={styles.link} onClick={() => showLogoutModal(true)}>
            <div>로그아웃</div>
            <div></div>
          </div>

          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />

          <div className={styles.link} onClick={() => router.push('/my/withdraw')}>
            <div>탈퇴하기</div>
            <div></div>
          </div>

          <HorizontalLine
            height={'0.2rem'}
            color={'#EAEFF7'}
            customStyle={{ position: 'relative', width: 'calc(100% + 4rem)', left: '-2rem' }}
          />
        </div>
      </div>
    </div>
  );
}
