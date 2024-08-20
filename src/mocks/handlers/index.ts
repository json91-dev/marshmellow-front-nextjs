import { alarmHandlers } from '@/mocks/handlers/alarmHandlers';
import { onboardingHandlers } from '@/mocks/handlers/onboardingHandlers';
import { activityHandlers } from '@/mocks/handlers/activityHandlers';
export const index = [...alarmHandlers, ...onboardingHandlers, ...activityHandlers];
