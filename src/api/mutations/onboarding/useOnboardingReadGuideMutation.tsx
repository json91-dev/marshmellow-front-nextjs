import { useMutation } from '@tanstack/react-query';
import { getAuthenticatedSession } from '@/utils/queryUtils';

interface OnboardingMissionStatusErrorResponse {
  message: string;
  data: null;
  errorCode: string;
}

// 성공 시 응답이 없을 때를 위한 타입 정의
type OnboardingCompleteResponse = void | OnboardingMissionStatusErrorResponse;

/** 온보딩이 완전히 종료되었을 때 호출하는 API **/
export default function useOnboardingReadGuideMutation() {
  const onboardingComplete = async (): Promise<OnboardingCompleteResponse> => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity/onboarding/read-guide`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (response.ok) {
      return; // 성공 시 아무 데이터도 반환하지 않음
    } else {
      const errorResponse: OnboardingMissionStatusErrorResponse = await response.json();
      throw errorResponse; // 에러 발생 시 타입에 맞는 에러 반환
    }
  };

  return useMutation({
    mutationFn: onboardingComplete,
  });
}
