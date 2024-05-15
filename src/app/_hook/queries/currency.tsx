import { useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

/** 마시멜로우 내역 조회 **/
export function useMarshmallowHistoryQuery() {
  const getWorkMonthly = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/currency/marshmallow/history`, {
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
    queryKey: ['currency', 'marshmallow'],
    queryFn: getWorkMonthly,
    staleTime: 1000 * 20,
  });
}

/** 응모권 내역 조회 **/
export function useTicketHistoryQuery() {
  const getWorkMonthly = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/currency/drawticket/history`, {
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
    queryKey: ['currency', 'ticket'],
    queryFn: getWorkMonthly,
    staleTime: 1000 * 20,
  });
}
