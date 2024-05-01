import { useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

const getProfile = async () => {
  const session = await getSession();

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

export default function useMemberProfile() {
  return useQuery({ queryKey: ['me', 'profile'], queryFn: getProfile });
}
