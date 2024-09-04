import { getSession } from 'next-auth/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { OnboardingMissionStatusResponse, OnboardingResponse } from '@/api/types/onboarding';
import { getAuthenticatedSession } from '@/utils/queryUtils';

/** 온보딩 완료시 완료 상태 변경 **/
export function useOnboardingCompleteMutation() {
  const onboardingComplete = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    return response.json();
  };

  return useMutation({
    mutationFn: () => onboardingComplete(),
  });
}

/** 온보딩 UI 상태 조회 **/
export function useOnboardingStatusQuery() {
  const getOnboardingStatus = async (): Promise<OnboardingResponse> => {
    const session = await getAuthenticatedSession();

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding/status`, {
    const response = await fetch(`${process.env.NEXT_PUBLIC_MSW_API_URL}/onboarding/status`, {
      // MSW
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['onboarding'],
    queryFn: getOnboardingStatus,
    staleTime: 1000 * 20,
  });
}

/** 온보딩 미션 상태 조회 **/
export function useOnboardingMissionStatus() {
  const getWorkMonthly = async (): Promise<OnboardingMissionStatusResponse> => {
    const session = await getAuthenticatedSession();

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/onboarding`, {
    const response = await fetch(`${process.env.NEXT_PUBLIC_MSW_API_URL}/activity/onboarding`, {
      // MSW
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['onboarding'],
    queryFn: getWorkMonthly,
    staleTime: 1000 * 20,
  });
}

/** 온보딩 과정에서 첫 출근 미션 버튼 클릭 시 호출 **/
export function firstOnboardingMissionCheckMutation() {
  const onboardingGettingMallowPractice = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/practice/onboarding`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('온보딩 첫 출근 미션 요청 실패');
    }
  };

  return useMutation({
    mutationFn: () => onboardingGettingMallowPractice(),
  });
}
