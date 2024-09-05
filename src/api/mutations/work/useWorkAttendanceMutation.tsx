import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

/** 근무 출석체크 요청 **/
export default function useWorkAttendanceMutation() {
  const work = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/work`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      // const error = await response.json();
      throw new Error('출석 체크 실패');
    }
  };

  return useMutation({
    mutationFn: () => work(),
  });
}
