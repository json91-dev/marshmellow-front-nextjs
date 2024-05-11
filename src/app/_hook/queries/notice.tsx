import { useQuery } from '@tanstack/react-query';

export function useNoticeAll() {
  const getNoticeAll = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notice`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['notice', 'all'],
    queryFn: getNoticeAll,
    staleTime: 1000 * 20,
  });
}

export function useNotice(noticeId: string) {
  const getMemberProfile = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notice/${noticeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    return response.json();
  };

  return useQuery({
    queryKey: ['notice', noticeId],
    queryFn: getMemberProfile,
    staleTime: 1000 * 20,
  });
}
