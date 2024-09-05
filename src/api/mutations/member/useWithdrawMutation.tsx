import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

export default function useWithdrawMutation() {
  const memberWithdraw = async (withdrawReason: string) => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ withdrawReason: withdrawReason }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('회원 탈퇴 실패');
    }
  };

  return useMutation({
    mutationFn: (reason: string) => memberWithdraw(reason),
  });
}