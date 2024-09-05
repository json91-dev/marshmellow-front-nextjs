import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

/** 오늘의 근무 현황 확인 **/
export default function useWorkToday() {
  const getWorkToday = async () => {
    const session = await getAuthenticatedSession();

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
