import { useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

export function useMember() {
  const getMember = async () => {
    const session = await getSession();
    if (!session) throw new Error('Not logged in');

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

export function useMemberProfile() {
  const getMemberProfile = async () => {
    const session = await getSession();
    if (!session) throw new Error('Not logged in');
    // console.log(session?.accessToken);

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
