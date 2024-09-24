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

type MemberProfile = {
  profile: Profile;
  createdAt: string;
  grade: string;
  officeHour: OfficeHour;
  isNicknameModifiable: boolean;
  nicknameModifiableRemainingDays: number;
  isOfficeHourModifiable: boolean;
  officeHourModifiableRemainingDays: number;
};

export type MemberProfileResponse = {
  message: string;
  data: MemberProfile;
};

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
