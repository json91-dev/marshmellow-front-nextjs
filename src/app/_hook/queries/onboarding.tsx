import { getSession } from 'next-auth/react';
import { useMutation, useQuery } from '@tanstack/react-query';

/** 온보딩 완료시 완료 상태 변경 **/
export function useOnboardingCompleteMutation() {
  const onboardingComplete = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

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

/** 온보딩 상태 조회 **/
export function useOnboardingStatusQuery() {
  const getMember = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding/status`, {
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
    queryFn: getMember,
    staleTime: 1000 * 20,
  });
}

/** 온보딩 미션 상태 조회 **/
export function useOnboardingMissionStatusQuery() {
  const getMember = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding/status`, {
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
    queryFn: getMember,
    staleTime: 1000 * 20,
  });
}

/** 온보딩 과정에서 첫 출근 미션 버튼 클릭 시 호출 **/
export function useOnboardingMallowPracticeMutation() {
  const onboardingGettingMallowPractice = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

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
