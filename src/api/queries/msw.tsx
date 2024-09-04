import { useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';
import { getAuthenticatedSession } from '@/utils/queryUtils';

export function useAlarmQuery() {
  const getAlarm = async (): Promise<any> => {
    const session = await getAuthenticatedSession();

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
