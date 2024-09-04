import { MemberMeResponse } from '@/api/types/member';
import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

export default function useMemberMe() {
  const getMember = async (): Promise<MemberMeResponse> => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/me`, {
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
    queryKey: ['me'],
    queryFn: getMember,
    staleTime: 1000 * 20,
  });
}
