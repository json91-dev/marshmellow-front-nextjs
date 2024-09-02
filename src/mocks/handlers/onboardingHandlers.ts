import { http, HttpResponse } from 'msw';

export const onboardingHandlers = [
  http.get(`${process.env.NEXT_PUBLIC_MSW_API_URL}/onboarding/status`, () => {
    return HttpResponse.json({
      message: '온보딩 상태를 조회하였습니다.',
      data: onboardingStatusData,
    });
  }),

  http.get(`${process.env.NEXT_PUBLIC_MSW_API_URL}/activity/onboarding`, () => {
    return HttpResponse.json({
      message: '온보딩 미션 상태를 조회하였습니다.',
      data: activityOnboardingData,
    });
  }),
];

const onboardingStatusData = {
  onboardingComplete: false,
  displayOnboardingMissionIcon: true,
};

const activityOnboardingData = {
  period: {
    startAt: '2024-04-30T01:38:49.164353',
    endAt: '2024-05-07T01:38:49.164353',
  },
  onboardingMissionStates: [
    {
      missionName: '오늘 업무 중 하나 완수하기',
      missionDescription: '업무 완료로 마시멜로우 획득 시 완료로 인정',
      isComplete: false,
    },
    {
      missionName: '레크레이션에서 뽑기 1회 참여',
      missionDescription: '결과 상관없이 참여시 완료로 인정',
      isComplete: false,
    },
    {
      missionName: '마시멜로우를 응모권으로 교환하기',
      missionDescription: '결과 상관없이 참여시 완료로 인정',
      isComplete: false,
    },
    {
      missionName: '사용 가이드 읽고오기',
      missionDescription: '사용가이드 페이지 이동시 완료로 인정',
      isComplete: false,
    },
  ],
};
