import { useMutation, useQuery } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

export function useMemberQuery() {
  const getMember = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

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

export function useMemberProfileQuery() {
  const getMemberProfile = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }
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

export function useMemberCurrencyQuery() {
  const getMemberCurrency = async () => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }
    // console.log(session?.accessToken);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/me/currency`, {
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
    queryKey: ['me', 'currency'],
    queryFn: getMemberCurrency,
    staleTime: 1000 * 20,
  });
}

export function useChangeNicknameMutation() {
  const changeNickname = async (nickname: string) => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/nickname`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modifyNickname: nickname }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('닉네임 변경 실패');
    }
  };

  return useMutation({
    mutationFn: (nickname: string) => changeNickname(nickname),
  });
}

export function useWithdrawMutation() {
  const memberWithdraw = async (withdrawReason: string) => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ withdrawReason: withdrawReason }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('회원 탈퇴 실패');
    }
  };

  return useMutation({
    mutationFn: (reason: string) => memberWithdraw(reason),
  });
}

export function useWithdrawCancelMutation() {
  const memberWithdrawCancel = async (withdrawReason: string) => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ withdrawReason: withdrawReason }),
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('회원 탈퇴 철회 실패');
    }
  };

  return useMutation({
    mutationFn: (nickname: string) => memberWithdrawCancel(nickname),
  });
}

export function useWorkTimeChangeMutation() {
  const workTimeChange = async (officeHourId: number) => {
    const session = await getSession();
    if (!session) {
      console.error('로그인이 되어있지 않음');
      throw new Error('로그인이 되어있지 않음');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/member/hour`, {
      method: 'DELETE',
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
