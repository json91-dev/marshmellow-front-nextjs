import { http, HttpResponse } from 'msw';

export const onboardingHandlers = [
  http.get(`${process.env.NEXT_PUBLIC_MSW_API_URL}/onboarding/status`, () => {
    return HttpResponse.json({
      message: '온보딩 상태를 조회하였습니다.',
      data: onboardingStatusData,
    });
  }),
];

const onboardingStatusData = {
  onboardingComplete: false,
  displayOnboardingMissionIcon: true,
};
