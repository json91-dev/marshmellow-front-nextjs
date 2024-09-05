import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

export default function useWorkWeekly(dateString: string) {
  const getWorkWeekly = async () => {
    const session = await getAuthenticatedSession();

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
