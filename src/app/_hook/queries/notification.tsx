import { getSession } from 'next-auth/react';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useNotificationModalQuery(modalType: number) {
  const getNotificationModalInfo = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notification/modal?modalType=${modalType}`, {
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
    queryFn: getNotificationModalInfo,
    staleTime: 1000 * 20,
  });
}

export function useNotificationModalAllQuery() {
  const getNotificationModalInfoAll = async () => {
    const session = await getSession();
    if (!session) throw new Error('로그인이 되어있지 않음');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notification/modal/all`, {
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
    queryFn: getNotificationModalInfoAll,
    staleTime: 1000 * 20,
  });
}

export function useNotificationModalReadMutation() {
  const modalRead = async (modalId: number) => {
    const session = await getSession();
    if (!session) {
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notification/modal/see`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modalId: modalId }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('닉네임 변경 실패');
    }
  };

  return useMutation({
    mutationFn: (modalId: number) => modalRead(modalId),
  });
}
