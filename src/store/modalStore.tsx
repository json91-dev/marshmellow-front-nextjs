import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface IdentifyModalState {
  // 회원가입 페이지 (signup)
  isShowAuthFailModal: boolean;
  showAuthFailModal(isShow: boolean): void;
  isShowAuthSuccessModal: boolean;
  showAuthSuccessModal(isShow: boolean): void;
  isShowQuitModal: boolean;
  showQuitModal(isShow: boolean): void;
  isShowExistNumberModal: boolean;
  showExistNumberModal(isShow: boolean): void;
  isShowTermsBottomSheet: boolean;
  showTermsBottomSheet(isShow: boolean): void;
  isShowQuitInfoModal: boolean;
  showQuitInfoModal(isShow: boolean): void;

  // 마이페이지 (my)
  isShowRankingChartModal: boolean;
  showRankingChartModal(isShow: boolean): void;
  isShowNicknameChangeModal: boolean;
  showNicknameChangeModal(isShow: boolean): void;
  isShowWorkTimeBottomSheet: boolean;
  showWorkTimeBottomSheet(isShow: boolean): void;
  isShowLogoutModal: boolean;
  showLogoutModal(isShow: boolean): void;
  isShowWorkTimeNotChangeByTimeModal: boolean;
  showWorkTimeNotChangeByTimeModal(isShow: boolean): void;
  isShowWorkTimeChangeModal: boolean;
  workTimeId: number;
  showWorkTimeChangeModal(isShow: boolean, workTimeId?: number): void;
  isShowNicknameNotChangeByDateModal: boolean;
  showNicknameNotChangeByDateModal(isShow: boolean): void;
  isShowNicknameChangeConfirmModal: boolean;
  showNicknameChangeConfirmModal(isShow: boolean): void;
  nicknameChangeRemainDays: number;
  setNicknameChangeRemainDays(nicknameChangeRemainDays: number): void;
  isShowWorkTimeNotChangeByDateModal: boolean;
  showWorkTimeNotChangeByDateModal(isShow: boolean): void;
  workTimeChangeRemainDays: number;
  setWorkTimeChangeRemainDays(workTimeRemainingDays: number): void;

  // 회원 탈퇴 페이지 (my/withdraw)
  isShowWithdrawConfirmModal: boolean;
  showWithdrawConfirmModal(isShow: boolean): void;
  isShowWithdrawConfirmCompleteModal: boolean;
  showWithdrawConfirmCompleteModal(isShow: boolean): void;

  // 마시멜로우 확인 페이지 (my/mallow)
  isShowMallowFilterDateBottomSheet: boolean;
  showMallowFilterDateBottomSheet(isShow: boolean): void;
  isShowMallowExpiredThisMonthModal: boolean;
  showMallowExpiredThisMonthModal(isShow: boolean): void;

  // 주소창 페이지 (my/address)
  isShowAddressChangeQuitModal: boolean;
  showAddressChangeQuitModal(isShow: boolean): void;
  isShowAddressDeleteModal: boolean;
  showAddressDeleteModal(isShow: boolean): void;

  // 사무실 페이지 (office)
  isShowOfficeNewbieSignupModal: boolean;
  officeNewbieSignupStatus: 'work' | 'workEnd' | 'lunch' | 'idle';
  showOfficeNewbieSignupModal(isShow: boolean, status?: string): void;
  isShowAttendanceCheckModal: boolean;
  isAttendanceCheckInOneMinute: boolean;
  showAttendanceCheckModal(isShow: boolean, isCheckOneMinute?: boolean): void;

  // 캘린더 출석체크 페이지 (/attendance)
  isShowFulfillAttendanceCompleteModal: boolean;
  showFulfillAttendanceCompleteModal(isShow: boolean): void;
  isShowFulfillAttendanceDateSelectModal: boolean;
  showFulfillAttendanceDateSelectModal(isShow: boolean): void;
  isShowFulfillAttendanceNoDayModal: boolean;
  showFulfillAttendanceNoDayModal(isShow: boolean): void;
  isShowFulfillAttendanceDateCheckModal: boolean;
  fulfillAttendanceCheckedDateString: string;
  showFulfillAttendanceDateCheckModal(isShow: boolean, checkedDateString?: string): void;
  isShowFulfillAttendanceAlarmSettingModal: boolean;
  showFulfillAttendanceAlarmSettingModal(isShow: boolean): void;

  // 레크레이션 럭키드로우 페이지 (/recreation/luckydraw)
  isShowFeverGuideModal: boolean;
  showFeverGuideModal(isShow: boolean): void;
  isShowLuckyDrawErrorModal: boolean;
  luckyDrawErrorType: 'MALLOW_NOT_ENOUGH' | 'DRAW_COUNT_EXCEED' | null;
  showLuckyDrawErrorModal(isShow: boolean, errorType: 'MALLOW_NOT_ENOUGH' | 'DRAW_COUNT_EXCEED' | null): void;
  isShowLuckyDrawWinningCheckModal: boolean;
  luckyDrawWinningCheckType: 'VIOLET' | 'PURPLE' | null;
  showLuckyDrawWinningCheckModal(isShow: boolean): void;
  setLuckyDrawWinningCheckType(type: 'VIOLET' | 'PURPLE' | ''): void;
  isShowLuckyDrawPickUpModal: boolean;
  showLuckyDrawPickUpModal(isShow: boolean): void;

  // 레크레이션 럭키드로우 보상 페이지 (/recreation/luckydraw/winner/prize)
  isShowLuckyDrawWinnerPrizePhoneCheckModal: boolean;
  showLuckyDrawWinnerPrizePhoneCheckModal(isShow: boolean): void;

  // 리서치 페이지 (/research)
  isShowLuckyDrawResearchCompleteModal: boolean;
  showLuckyDrawResearchCompleteModal(isShow: boolean): void;

  // 보상 페이지 (/prize)
  isShowPrizeLuckyDrawTaxInfoCancel: boolean;
  showPrizeLuckyDrawTaxInfoCancel(isShow: boolean): void;

  // 미션 모달
  isShowOnboardingMissionModal: boolean;
  onboardingMissionModalType: 'MissionComplete' | 'MissionAllComplete';
  showOnboardingMissionModal(isShow: boolean, type: 'MissionComplete' | 'MissionAllComplete'): void;

  // 이벤트 모달
  isShowAttendanceEventInfoBottomSheet: boolean;
  showAttendanceEventInfoBottomSheet(isShow: boolean): void;
}

export const useModalStore = create(
  devtools<IdentifyModalState>((set) => ({
    // 회원가입 페이지 (signup)
    isShowAuthFailModal: false,
    showAuthFailModal(isShow) {
      set({ isShowAuthFailModal: isShow });
    },
    isShowAuthSuccessModal: false,
    showAuthSuccessModal(isShow) {
      set({ isShowAuthSuccessModal: isShow });
    },
    isShowQuitModal: false,
    showQuitModal(isShow) {
      set({ isShowQuitModal: isShow });
    },
    isShowTermsBottomSheet: false,
    showTermsBottomSheet(isShow) {
      set({ isShowTermsBottomSheet: isShow });
    },
    isShowExistNumberModal: false,
    showExistNumberModal(isShow) {
      set({ isShowExistNumberModal: isShow });
    },
    isShowQuitInfoModal: false,
    showQuitInfoModal(isShow) {
      set({ isShowQuitInfoModal: isShow });
    },

    // 마이페이지 (my)
    isShowRankingChartModal: false,
    showRankingChartModal(isShow) {
      set({ isShowRankingChartModal: isShow });
    },
    isShowNicknameChangeModal: false,
    showNicknameChangeModal(isShow) {
      set({ isShowNicknameChangeModal: isShow });
    },
    isShowNicknameNotChangeByDateModal: false,
    showNicknameNotChangeByDateModal(isShow: boolean) {
      set({ isShowNicknameNotChangeByDateModal: isShow });
    },
    isShowWorkTimeBottomSheet: false,
    showWorkTimeBottomSheet(isShow) {
      set({ isShowWorkTimeBottomSheet: isShow });
    },
    isShowLogoutModal: false,
    showLogoutModal(isShow: boolean) {
      set({ isShowLogoutModal: isShow });
    },
    isShowWorkTimeNotChangeByTimeModal: false,
    showWorkTimeNotChangeByTimeModal(isShow: boolean) {
      set({ isShowWorkTimeNotChangeByTimeModal: isShow });
    },
    isShowWorkTimeChangeModal: false,
    workTimeId: 1,
    showWorkTimeChangeModal(isShow: boolean, workTimeId: number = 1) {
      set({ isShowWorkTimeChangeModal: isShow, workTimeId });
    },
    isShowNicknameChangeConfirmModal: false,
    showNicknameChangeConfirmModal(isShow: boolean) {
      set({ isShowNicknameChangeConfirmModal: isShow });
    },
    isShowWorkTimeNotChangeByDateModal: false,
    showWorkTimeNotChangeByDateModal(isShow: boolean) {
      set({ isShowWorkTimeNotChangeByDateModal: isShow });
    },
    workTimeChangeRemainDays: 0,
    setWorkTimeChangeRemainDays(workTimeChangeRemainingDay: number) {
      set({
        workTimeChangeRemainDays: workTimeChangeRemainingDay,
      });
    },
    nicknameChangeRemainDays: 0,
    setNicknameChangeRemainDays(nicknameChangeRemainDays: number) {
      set({ nicknameChangeRemainDays });
    },

    // 회원 탈퇴 페이지 (withdraw)
    isShowWithdrawConfirmModal: false,
    showWithdrawConfirmModal(isShow) {
      set({ isShowWithdrawConfirmModal: isShow });
    },
    isShowWithdrawConfirmCompleteModal: false,
    showWithdrawConfirmCompleteModal(isShow) {
      set({ isShowWithdrawConfirmCompleteModal: isShow });
    },

    // 마시멜로우 확인 페이지 (mallow)
    isShowMallowFilterDateBottomSheet: false,
    showMallowFilterDateBottomSheet(isShow) {
      set({ isShowMallowFilterDateBottomSheet: isShow });
    },
    isShowMallowExpiredThisMonthModal: false,
    showMallowExpiredThisMonthModal(isShow) {
      set({ isShowMallowExpiredThisMonthModal: isShow });
    },

    // 주소창 페이지
    isShowAddressChangeQuitModal: false,
    showAddressChangeQuitModal(isShow: boolean) {
      set({ isShowAddressChangeQuitModal: isShow });
    },
    isShowAddressDeleteModal: false,
    showAddressDeleteModal(isShow: boolean) {
      set({ isShowAddressDeleteModal: isShow });
    },

    // 사무실 페이지
    isShowOfficeNewbieSignupModal: false,
    officeNewbieSignupStatus: 'work',
    showOfficeNewbieSignupModal(isShow: boolean, status?: 'work' | 'workEnd' | 'lunch' | 'idle') {
      set({
        isShowOfficeNewbieSignupModal: isShow,
        officeNewbieSignupStatus: status ? status : 'idle',
      });
    },

    isShowAttendanceCheckModal: false,
    isAttendanceCheckInOneMinute: false,
    showAttendanceCheckModal(isShow, isCheckInOneMinute = false) {
      set({
        isShowAttendanceCheckModal: isShow,
        isAttendanceCheckInOneMinute: isCheckInOneMinute,
      });
    },

    // 캘린더 출근 페이지 (attendance)
    isShowFulfillAttendanceCompleteModal: false,
    showFulfillAttendanceCompleteModal(isShow: boolean) {
      set({ isShowFulfillAttendanceCompleteModal: isShow });
    },
    isShowFulfillAttendanceDateSelectModal: false,
    showFulfillAttendanceDateSelectModal(isShow: boolean) {
      set({ isShowFulfillAttendanceDateSelectModal: isShow });
    },
    isShowFulfillAttendanceNoDayModal: false,
    showFulfillAttendanceNoDayModal(isShow: boolean) {
      set({ isShowFulfillAttendanceNoDayModal: isShow });
    },
    fulfillAttendanceCheckedDateString: '',
    isShowFulfillAttendanceDateCheckModal: false,
    showFulfillAttendanceDateCheckModal(isShow: boolean, checkedDateString: string = '') {
      // if (checkedDateString === '') checkedDateString = fulfillAttendanceCheckedDateString
      set((state) => ({
        isShowFulfillAttendanceDateCheckModal: isShow,
        fulfillAttendanceCheckedDateString:
          checkedDateString === '' ? state.fulfillAttendanceCheckedDateString : checkedDateString,
      }));
    },
    isShowFulfillAttendanceAlarmSettingModal: false,
    showFulfillAttendanceAlarmSettingModal(isShow: boolean) {
      set({ isShowFulfillAttendanceAlarmSettingModal: isShow });
    },
    // 레크레이션 럭키드로우 페이지
    isShowFeverGuideModal: false,
    showFeverGuideModal(isShow: boolean) {
      set({ isShowFeverGuideModal: isShow });
    },
    isShowLuckyDrawErrorModal: false,
    luckyDrawErrorType: null,
    showLuckyDrawErrorModal(isShow: boolean, errorType: 'MALLOW_NOT_ENOUGH' | 'DRAW_COUNT_EXCEED' | null) {
      if (errorType === null) {
        set({
          isShowLuckyDrawErrorModal: isShow,
        });

        // Layout shift 방지
        setTimeout(() => {
          set({
            luckyDrawErrorType: null,
          });
        }, 1000);
      } else {
        set({
          isShowLuckyDrawErrorModal: isShow,
          luckyDrawErrorType: errorType,
        });
      }
    },
    isShowLuckyDrawWinningCheckModal: false,
    luckyDrawWinningCheckType: null,
    showLuckyDrawWinningCheckModal(isShow: boolean) {
      set({
        isShowLuckyDrawWinningCheckModal: isShow,
      });
    },
    setLuckyDrawWinningCheckType(type: 'VIOLET' | 'PURPLE') {
      set({
        luckyDrawWinningCheckType: type,
      });
    },
    isShowLuckyDrawPickUpModal: false,
    showLuckyDrawPickUpModal(isShow: boolean) {
      set({ isShowLuckyDrawPickUpModal: isShow });
    },

    // 레크레이션 럭키드로우 보상 페이지 (/recreation/luckydraw/winner/prize)
    isShowLuckyDrawWinnerPrizePhoneCheckModal: false,
    showLuckyDrawWinnerPrizePhoneCheckModal(isShow: boolean) {
      set({ isShowLuckyDrawWinnerPrizePhoneCheckModal: isShow });
    },

    // 리서치 페이지 (/research)
    isShowLuckyDrawResearchCompleteModal: false,
    showLuckyDrawResearchCompleteModal(isShow: boolean) {
      set({ isShowLuckyDrawResearchCompleteModal: isShow });
    },

    // 보상 페이지 (/prize)
    isShowPrizeLuckyDrawTaxInfoCancel: false,
    showPrizeLuckyDrawTaxInfoCancel(isShow: boolean) {
      set({ isShowPrizeLuckyDrawTaxInfoCancel: isShow });
    },

    // 온보딩 미션 모달
    isShowOnboardingMissionModal: false,
    onboardingMissionModalType: 'MissionComplete',
    showOnboardingMissionModal: (isShow: boolean, type: 'MissionComplete' | 'MissionAllComplete') => {
      set({ isShowOnboardingMissionModal: isShow, onboardingMissionModalType: type });
    },

    isShowAttendanceEventInfoBottomSheet: false,
    showAttendanceEventInfoBottomSheet(isShow) {
      set({ isShowAttendanceEventInfoBottomSheet: isShow });
    },
  })),
);

export default useModalStore;
