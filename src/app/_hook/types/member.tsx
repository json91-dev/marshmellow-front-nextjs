export type Profile = {
  name: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  profileImageUrl: string;
  gender: string;
  birth: string;
};

export type OfficeHour = {
  startHour: number;
  endHour: number;
  launchTimeAt: number;
  todayStartTime: string;
  todayEndTime: string;
  todayLaunchTime: string;
};

export type User = {
  profile: Profile;
  createdAt: string;
  grade: string;
  officeHour: OfficeHour;
  isNicknameModifiable: boolean;
  nicknameModifiableRemainingDays: number;
  isOfficeHourModifiable: boolean;
  officeHourModifiableRemainingDays: number;
};

export type MemberProfileResponse = {
  message: string;
  data: User;
};
