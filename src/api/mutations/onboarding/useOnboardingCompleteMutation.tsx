import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useMutation } from '@tanstack/react-query';

/** 온보딩이 완전히 종료되었을때 호출하는 API **/
export default function useOnboardingCompleteMutation() {
  const onboardingComplete = async () => {
    const session = await getAuthenticatedSession();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    return response.json();
  };

  return useMutation({
    mutationFn: () => onboardingComplete(),
  });
}
