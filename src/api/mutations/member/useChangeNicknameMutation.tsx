import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

export default function useChangeNicknameMutation() {
  const changeNickname = async (nickname: string) => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/nickname`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modifyNickname: nickname }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('닉네임 변경 실패');
    }
  };

  return useMutation({
    mutationFn: (nickname: string) => changeNickname(nickname),
  });
}
