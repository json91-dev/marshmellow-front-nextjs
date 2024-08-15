type Profile = {
  name: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  profileImageUrl: string;
  gender: string;
  birth: string;
};

type OfficeHour = {
  startHour: number;
  endHour: number;
  launchTimeAt: number;
  todayStartTime: string;
  todayEndTime: string;
  todayLaunchTime: string;
};

type MemberProfile = {
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
  data: MemberProfile;
};

type User = {
  profile: Profile;
  createdAt: string;
  grade: string;
  officeHour: OfficeHour;
  isNicknameModifiable: boolean;
  nicknameModifiableRemainingDays: number;
  isOfficeHourModifiable: boolean;
  officeHourModifiableRemainingDays: number;
};

type ExpiresThisMonthCurrencies = {
  marshmallowQuantity: number;
  drawTicketQuantity: number;
};

type Currency = {
  marshmallowQuantity: number;
  drawTicketQuantity: number;
  expiresThisMonthCurrencies: ExpiresThisMonthCurrencies;
};

type MemberMe = {
  user: User;
  currency: Currency;
};

export type MemberMeResponse = {
  message: string;
  data: MemberMe;
};
