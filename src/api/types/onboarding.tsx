/** /onboarding/status (온보딩 UI 상태 조회) **/
type OnboardingCompleteStatus = {
  onboardingComplete: boolean;
  displayOnboardingMissionIcon: boolean;
};

export type OnboardingCompleteStatusResponse = {
  message: string;
  data: OnboardingCompleteStatus;
};

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
