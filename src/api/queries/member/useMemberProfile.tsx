import { MemberProfileResponse } from '@/api/types/member';
import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

export default function useMemberProfile() {
  const getMemberProfile = async (): Promise<MemberProfileResponse> => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/me/profile`, {
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
    queryKey: ['me', 'profile'],
    queryFn: getMemberProfile,
    staleTime: 1000 * 20,
  });
}
