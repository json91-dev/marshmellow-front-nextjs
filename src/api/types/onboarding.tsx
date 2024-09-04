/** /onboarding/status (온보딩 UI 상태 조회) **/
type OnboardingStatus = {
  onboardingComplete: boolean;
  displayOnboardingMissionIcon: boolean;
};

export type OnboardingResponse = {
  message: string;
  data: OnboardingStatus;
};

/** /activity/onboarding (온보딩 미션 상태 조회) **/
type Period = {
  startAt: string;
  endAt: string;
};

type OnboardingMissionState = {
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
