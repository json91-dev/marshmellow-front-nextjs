// /v1/activity/onboarding (온보딩 미션 상태 조회)
type Period = {
  startAt: string; // ISO 8601 형식의 날짜 문자열
  endAt: string; // ISO 8601 형식의 날짜 문자열
};

type OnboardingMissionState = {
  missionName: string;
  missionDescription: string;
  isComplete: boolean;
};

export type OnboardingResponse = {
  message: string;
  data: {
    period: Period;
    onboardingMissionStates: OnboardingMissionState[];
  };
};
