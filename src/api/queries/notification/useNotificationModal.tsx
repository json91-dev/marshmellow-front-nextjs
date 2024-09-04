import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

export default function useNotificationModal(modalType: number) {
  const getNotificationModalInfo = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notification/modal?modalType=${modalType}`, {
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
    queryKey: ['notification', 'modal', modalType],
    queryFn: getNotificationModalInfo,
    staleTime: 1000 * 20,
  });
}
