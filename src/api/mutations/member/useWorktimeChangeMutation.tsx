import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

export default function useWorkTimeChangeMutation() {
  const workTimeChange = async (officeHourId: number) => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/hour`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modifyOfficeHourId: officeHourId }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('근무시간 변경 요청 실패');
    }
  };

  return useMutation({
    mutationFn: (officeHourId: number) => workTimeChange(officeHourId),
  });
}
