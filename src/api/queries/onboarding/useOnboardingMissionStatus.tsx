import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

/** /activity/onboarding (온보딩 미션 상태 조회) **/
type Period = {
  startAt: string;
  endAt: string;
};

export type OnboardingMissionState = {
  missionName: string;
  missionDescription: string;
  isComplete: boolean;
};

export type OnboardingMissionStatusResponse = {
  message: string;
  data: {
    period: Period;
    onboardingMissionStates: OnboardingMissionState[];
  };
};

export default function useOnboardingMissionStatus() {
  const getWorkMonthly = async (): Promise<OnboardingMissionStatusResponse> => {
    const session = await getAuthenticatedSession();

    // const response = await fetch(`${process.env.NEXT_PUBLIC_MSW_API_URL}/activity/onboarding`, {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/onboarding`, {
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
    queryKey: ['activity', 'onboarding', 'mission'],
    queryFn: getWorkMonthly,
    staleTime: 1000 * 20,
  });
}
