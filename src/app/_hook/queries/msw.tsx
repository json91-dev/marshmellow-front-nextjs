import { useMutation, useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';
import { MemberMeResponse, MemberProfileResponse } from '@/app/_hook/types/member';

export function useAlarmQuery() {
  const getAlarm = async (): Promise<MemberMeResponse> => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_MSW_API_URL}/alarm`, {
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
    queryKey: ['alarm'],
    queryFn: getAlarm,
    staleTime: 1000 * 20,
  });
}
