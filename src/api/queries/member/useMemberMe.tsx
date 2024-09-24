import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

type Profile = {
  name: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  profileImageUrl: string;
  gender: string;
  birth: string;
};

type OfficeHour = {
  startHour: number;
  endHour: number;
  launchTimeAt: number;
  todayStartTime: string;
  todayEndTime: string;
  todayLaunchTime: string;
};

type User = {
  profile: Profile;
  createdAt: string;
  grade: string;
  officeHour: OfficeHour;
  isNicknameModifiable: boolean;
  nicknameModifiableRemainingDays: number;
  isOfficeHourModifiable: boolean;
  officeHourModifiableRemainingDays: number;
};

type ExpiresThisMonthCurrencies = {
  marshmallowQuantity: number;
  drawTicketQuantity: number;
};

type Currency = {
  marshmallowQuantity: number;
  drawTicketQuantity: number;
  expiresThisMonthCurrencies: ExpiresThisMonthCurrencies;
};

type MemberMe = {
  user: User;
  currency: Currency;
};

export type MemberMeResponse = {
  message: string;
  data: MemberMe;
};

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
