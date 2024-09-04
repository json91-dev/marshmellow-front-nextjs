import { useMutation } from '@tanstack/react-query';
import { getAuthenticatedSession } from '@/utils/queryUtils';

/** 온보딩 과정에서 첫 출근 미션 버튼 클릭 시 호출 **/
export default function useFirstOnboardingMissionCheckMutation() {
  const onboardingGettingMallowPractice = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/practice/onboarding`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('온보딩 첫 출근 미션 요청 실패');
    }
  };

  return useMutation({
    mutationFn: () => onboardingGettingMallowPractice(),
  });
}
