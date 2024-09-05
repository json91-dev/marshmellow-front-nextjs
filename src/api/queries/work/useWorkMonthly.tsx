import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

/** 월별 근무 현황 확인 **/
export default function useWorkMonthly(dateString: string) {
  const getWorkMonthly = async () => {
    const session = await getAuthenticatedSession();

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
