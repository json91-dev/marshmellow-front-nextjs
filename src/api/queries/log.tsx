import { MallowStateType } from '@/app/my/mallow/page';
import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

export function useMarshmallowHistoryQuery(type: MallowStateType = 'ALL', range: number) {
  const getWorkMonthly = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/currency/marshmallow/history?type=${type}&range=${range}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    );

    return response.json();
  };

  return useQuery({
    queryKey: ['currency', 'marshmallow', type, range],
    queryFn: getWorkMonthly,
    staleTime: 1000 * 20,
  });
}
