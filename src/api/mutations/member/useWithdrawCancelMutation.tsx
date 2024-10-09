import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

type ErrorResponse = {
  message: string;
  data: any | null;
  errorCode: string | null;
};

// 응답이 성공일 때는 빈 객체가 올 수 있으므로 Partial로 정의
type SuccessResponse = Record<string, never>; // 빈 객체

type ResponseType = SuccessResponse | ErrorResponse;

export default function useWithdrawCancelMutation() {
  const memberWithdrawCancel = async (deletionId: string): Promise<ResponseType> => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/rollback`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deletionId: deletionId }),
      cache: 'no-store',
    });

    if (response.ok) {
      return {};
    } else {
      throw new Error('회원 탈퇴 철회 실패');
    }
  };

  return useMutation({
    mutationFn: (nickname: string) => memberWithdrawCancel(nickname),
  });
}
