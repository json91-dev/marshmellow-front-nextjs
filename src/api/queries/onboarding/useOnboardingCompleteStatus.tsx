import { OnboardingCompleteStatusResponse } from '@/api/types/onboarding';
import { getAuthenticatedSession } from '@/utils/queryUtils';
import { useQuery } from '@tanstack/react-query';

export default function useOnboardingCompleteStatus() {
  const getOnboardingStatus = async (): Promise<OnboardingCompleteStatusResponse> => {
    const session = await getAuthenticatedSession();

    // const response = await fetch(`${process.env.NEXT_PUBLIC_MSW_API_URL}/onboarding/status`, {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onboarding/status`, {
      // MSW
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
    queryKey: ['onboarding', 'status'],
    queryFn: getOnboardingStatus,
    staleTime: 1000 * 20,
  });
}
