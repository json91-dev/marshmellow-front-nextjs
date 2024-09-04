import { useQuery } from '@tanstack/react-query';

export default function useNoticeAll() {
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
