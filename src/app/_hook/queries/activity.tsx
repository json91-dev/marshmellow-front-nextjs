import { getSession } from 'next-auth/react';
import { useMutation, useQuery } from '@tanstack/react-query';

/** 주별 근무현황 확인 **/
export function useWorkWeeklyQuery(dateString: string) {
  const getWorkWeekly = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/work/weekly?date=${dateString}`, {
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
    queryKey: ['work', 'weekly', dateString],
    queryFn: getWorkWeekly,
    staleTime: 1000 * 20,
  });
}

/** 오늘의 근무 현황 확인 **/
export function useWorkTodayQuery() {
  const getWorkToday = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/work/today`, {
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
    queryKey: ['work', 'today'],
    queryFn: getWorkToday,
    staleTime: 1000 * 20,
  });
}

/** 월별 근무 현황 확인 **/
export function useWorkMonthlyQuery(dateString: string) {
  const getWorkMonthly = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/work/monthly?date=${dateString}`, {
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
    queryKey: ['work', 'monthly', dateString],
    queryFn: getWorkMonthly,
    staleTime: 1000 * 20,
  });
}

/** 근무 출석체크 요청 **/
export function useWorkAttendanceMutation() {
  const work = async () => {
    const session = await getSession();
    if (!session) {
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/work`, {
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
      throw new Error('회원 탈퇴 철회 실패');
    }
  };

  return useMutation({
    mutationFn: () => work(),
  });
}
