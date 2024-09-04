import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

export default function useNotificationModalReadMutation() {
  const modalRead = async (modalId: number) => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notification/modal/see`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modalId: modalId }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('닉네임 변경 실패');
    }
  };

  return useMutation({
    mutationFn: (modalId: number) => modalRead(modalId),
  });
}
