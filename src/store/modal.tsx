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

  closeAll(): void;
}

export const useModalStore = create(
  devtools<IdentifyModalState>((set) => ({
    // 회원가입 페이지 (signup)
    isShowAuthFailModal: false,
    isShowAuthSuccessModal: false,
    isShowQuitModal: false,
    isShowTermsBottomSheet: false,
    isShowExistNumberModal: false,
    isShowQuitInfoModal: false,

    // 마이페이지 (my)
    isShowRankingChartModal: false,
    isShowNicknameChangeModal: false,
    isShowNicknameNotChangeByDateModal: false,
    nicknameChangeRemainDays: 0,
    isShowWorkTimeBottomSheet: false,
    isShowLogoutModal: false,
    isShowWorkTimeNotChangeByTimeModal: false,
    isShowWorkTimeChangeModal: false,
    workTimeId: 1,
    isShowNicknameChangeConfirmModal: false,
    isShowWorkTimeNotChangeByDateModal: false,
    workTimeChangeRemainDays: 0,

    // 회원 탈퇴 페이지 (withdraw)
    isShowWithdrawConfirmModal: false,
    isShowWithdrawConfirmCompleteModal: false,

    // 마시멜로우 확인 페이지 (mallow)
    isShowMallowFilterDateBottomSheet: false,
    isShowMallowExpiredThisMonthModal: false,

    // 주소창 페이지
    isShowAddressChangeQuitModal: false,
    isShowAddressDeleteModal: false,

    // 사무실 페이지
    isShowOfficeNewbieSignupModal: false,
    officeNewbieSignupStatus: 'work',

    isShowAttendanceCheckModal: false,
    isAttendanceCheckInOneMinute: false,
    showAttendanceCheckModal(isShow, isCheckInOneMinute = false) {
      set({
        isShowAttendanceCheckModal: isShow,
        isAttendanceCheckInOneMinute: isCheckInOneMinute,
      });
    },

    showAuthFailModal(isShow) {
      set({ isShowAuthFailModal: isShow });
    },

    showAuthSuccessModal(isShow) {
      set({ isShowAuthSuccessModal: isShow });
    },

    showQuitModal(isShow) {
      set({ isShowQuitModal: isShow });
    },

    showTermsBottomSheet(isShow) {
      set({ isShowTermsBottomSheet: isShow });
    },

    showExistNumberModal(isShow) {
      set({ isShowExistNumberModal: isShow });
    },

    showQuitInfoModal(isShow) {
      set({ isShowQuitInfoModal: isShow });
    },

    showRankingChartModal(isShow) {
      set({ isShowRankingChartModal: isShow });
    },

    showNicknameChangeModal(isShow) {
      set({ isShowNicknameChangeModal: isShow });
    },

    showWorkTimeBottomSheet(isShow) {
      set({ isShowWorkTimeBottomSheet: isShow });
    },

    showLogoutModal(isShow: boolean) {
      set({ isShowLogoutModal: isShow });
    },

    showWithdrawConfirmModal(isShow) {
      set({ isShowWithdrawConfirmModal: isShow });
    },

    showWithdrawConfirmCompleteModal(isShow) {
      set({ isShowWithdrawConfirmCompleteModal: isShow });
    },

    showMallowFilterDateBottomSheet(isShow) {
      set({ isShowMallowFilterDateBottomSheet: isShow });
    },

    showMallowExpiredThisMonthModal(isShow) {
      set({ isShowMallowExpiredThisMonthModal: isShow });
    },

    showWorkTimeNotChangeByTimeModal(isShow: boolean) {
      set({ isShowWorkTimeNotChangeByTimeModal: isShow });
    },

    showWorkTimeChangeModal(isShow: boolean, workTimeId: number = 1) {
      set({ isShowWorkTimeChangeModal: isShow, workTimeId });
    },
    showNicknameNotChangeByDateModal(isShow: boolean) {
      set({ isShowNicknameNotChangeByDateModal: isShow });
    },

    setNicknameChangeRemainDays(nicknameChangeRemainDays: number) {
      set({ nicknameChangeRemainDays });
    },

    showAddressChangeQuitModal(isShow: boolean) {
      set({ isShowAddressChangeQuitModal: isShow });
    },

    showAddressDeleteModal(isShow: boolean) {
      set({ isShowAddressDeleteModal: isShow });
    },

    showNicknameChangeConfirmModal(isShow: boolean) {
      set({ isShowNicknameChangeConfirmModal: isShow });
    },

    showOfficeNewbieSignupModal(isShow: boolean, status?: 'work' | 'workEnd' | 'lunch' | 'idle') {
      set({
        isShowOfficeNewbieSignupModal: isShow,
        officeNewbieSignupStatus: status ? status : 'idle',
      });
    },

    showWorkTimeNotChangeByDateModal(isShow: boolean) {
      set({ isShowWorkTimeNotChangeByDateModal: isShow });
    },
    setWorkTimeChangeRemainDays(workTimeChangeRemainingDay: number) {
      set({
        workTimeChangeRemainDays: workTimeChangeRemainingDay,
      });
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
      });
    },
  })),
);
