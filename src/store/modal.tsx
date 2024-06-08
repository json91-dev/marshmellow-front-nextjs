import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface IdentifyModalState {
  // 회원가입 페이지 (signup)
  isShowAuthFailModal: boolean;
  isShowAuthSuccessModal: boolean;
  isShowQuitModal: boolean;
  isShowExistNumberModal: boolean;
  isShowTermsBottomSheet: boolean;
  isShowQuitInfoModal: boolean;
  showAuthFailModal(isShow: boolean): void;
  showAuthSuccessModal(isShow: boolean): void;
  showQuitModal(isShow: boolean): void;
  showExistNumberModal(isShow: boolean): void;
  showTermsBottomSheet(isShow: boolean): void;
  showQuitInfoModal(isShow: boolean): void;

  // 마이페이지 (my)
  isShowRankingChartModal: boolean;
  isShowNicknameChangeModal: boolean;
  isShowNicknameNotChangeByDateModal: boolean;
  nicknameChangeRemainDays: number;
  isShowWorkTimeNotChangeByDateModal: boolean;
  workTimeChangeRemainDays: number;
  isShowWorkTimeBottomSheet: boolean;
  isShowLogoutModal: boolean;
  isShowWorkTimeNotChangeByTimeModal: boolean;
  isShowWorkTimeChangeModal: boolean;
  workTimeId: number;
  isShowNicknameChangeConfirmModal: boolean;
  showRankingChartModal(isShow: boolean): void;
  showNicknameChangeModal(isShow: boolean): void;
  showWorkTimeBottomSheet(isShow: boolean): void;
  showLogoutModal(isShow: boolean): void;
  showWorkTimeNotChangeByTimeModal(isShow: boolean): void;
  showWorkTimeChangeModal(isShow: boolean, workTimeId?: number): void;
  showNicknameNotChangeByDateModal(isShow: boolean): void;
  showNicknameChangeConfirmModal(isShow: boolean): void;
  setNicknameChangeRemainDays(nicknameChangeRemainDays: number): void;
  showWorkTimeNotChangeByDateModal(isShow: boolean): void;
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

  closeAll(): void;
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

    closeAll() {
      set({
        isShowAuthFailModal: false,
        isShowTermsBottomSheet: false,
        isShowAuthSuccessModal: false,
        isShowExistNumberModal: false,
        isShowQuitModal: false,
        isShowQuitInfoModal: false,
        isShowRankingChartModal: false,
        isShowNicknameChangeModal: false,
        isShowWorkTimeBottomSheet: false,
        isShowLogoutModal: false,
        isShowWithdrawConfirmModal: false,
        isShowWithdrawConfirmCompleteModal: false,
        isShowMallowFilterDateBottomSheet: false,
        isShowMallowExpiredThisMonthModal: false,
        isShowWorkTimeNotChangeByTimeModal: false,
        isShowWorkTimeChangeModal: false,
        isShowNicknameNotChangeByDateModal: false,
        isShowAddressChangeQuitModal: false,
        isShowAddressDeleteModal: false,
        isShowNicknameChangeConfirmModal: false,
        isShowOfficeNewbieSignupModal: false,
        isShowWorkTimeNotChangeByDateModal: false,
        isShowFulfillAttendanceCompleteModal: false,
        isShowFulfillAttendanceDateSelectModal: false,
        isShowFulfillAttendanceNoDayModal: false,
      });
    },
  })),
);
