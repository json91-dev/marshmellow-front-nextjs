export type OnboardingStatus = {
  onboardingComplete: boolean;
  displayOnboardingMissionIcon: boolean;
};

export type OnboardingResponse = {
  message: string;
  data: OnboardingStatus;
};
