import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface IdentifyModalState {
  // 회원가입 페이지
  isShowAuthFailModal: boolean;
  isShowAuthSuccessModal: boolean;
  isShowQuitModal: boolean;
  isShowExistNumberModal: boolean;
  isShowTermsBottomSheet: boolean;
  isShowQuitInfoModal: boolean;

  // 마이페이지
  isShowRankingChartModal: boolean;
  isShowNicknameChangeModal: boolean;
  isShowNicknameNotChangeByDateModal: boolean;
  isShowWorkTimeBottomSheet: boolean;
  isShowLogoutModal: boolean;
  isShowWorkTimeNotChangeByTimeModal: boolean;
  isShowWorkTimeNotChangeByDateModal: boolean;
  isShowWorkTimeChangeModal: boolean;
  isShowNicknameChangeConfirmModal: boolean;

  // 회원 탈퇴 페이지
  isShowWithdrawConfirmModal: boolean;
  isShowWithdrawConfirmCompleteModal: boolean;

  // 마시멜로우 확인 페이지
  isShowMallowFilterDateBottomSheet: boolean;
  isShowMallowExpiredThisMonthModal: boolean;

  // 주소창 페이지
  isShowAddressChangeQuitModal: boolean;
  isShowAddressDeleteModal: boolean;

  showAuthFailModal(isShow: boolean): void;
  showAuthSuccessModal(isShow: boolean): void;
  showQuitModal(isShow: boolean): void;
  showExistNumberModal(isShow: boolean): void;
  showTermsBottomSheet(isShow: boolean): void;
  showQuitInfoModal(isShow: boolean): void;
  showRankingChartModal(isShow: boolean): void;
  showNicknameChangeModal(isShow: boolean): void;
  showWorkTimeBottomSheet(isShow: boolean): void;
  showLogoutModal(isShow: boolean): void;
  showWithdrawConfirmModal(isShow: boolean): void;
  showWithdrawConfirmCompleteModal(isShow: boolean): void;
  showMallowFilterDateBottomSheet(isShow: boolean): void;
  showMallowExpiredThisMonthModal(isShow: boolean): void;
  showWorkTimeNotChangeByTimeModal(isShow: boolean): void;
  showWorkTimeNotChangeByDateModal(isShow: boolean): void;
  showWorkTimeChangeModal(isShow: boolean): void;
  showNicknameNotChangeByDateModal(isShow: boolean): void;
  showAddressChangeQuitModal(isShow: boolean): void;
  showAddressDeleteModal(isShow: boolean): void;
  showNicknameChangeConfirmModal(isShow: boolean): void;
  closeAll(): void;
}

export const useModalStore = create(
  devtools<IdentifyModalState>((set) => ({
    // 회원가입 페이지
    isShowAuthFailModal: false,
    isShowAuthSuccessModal: false,
    isShowQuitModal: false,
    isShowTermsBottomSheet: false,
    isShowExistNumberModal: false,
    isShowQuitInfoModal: false,

    // 마이페이지
    isShowRankingChartModal: false,
    isShowNicknameChangeModal: false,
    isShowNicknameNotChangeByDateModal: false,
    isShowWorkTimeBottomSheet: false,
    isShowLogoutModal: false,
    isShowWorkTimeNotChangeByTimeModal: false,
    isShowWorkTimeNotChangeByDateModal: false,
    isShowWorkTimeChangeModal: false,
    isShowNicknameChangeConfirmModal: false,

    // 회원 탈퇴 페이지
    isShowWithdrawConfirmModal: false,
    isShowWithdrawConfirmCompleteModal: false,

    // 마시멜로우 확인 페이지
    isShowMallowFilterDateBottomSheet: false,
    isShowMallowExpiredThisMonthModal: false,

    // 주소창 페이지
    isShowAddressChangeQuitModal: false,
    isShowAddressDeleteModal: false,

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
    showWorkTimeNotChangeByDateModal(isShow: boolean) {
      set({ isShowWorkTimeNotChangeByDateModal: isShow });
    },
    showWorkTimeChangeModal(isShow: boolean) {
      set({ isShowWorkTimeChangeModal: isShow });
    },
    showNicknameNotChangeByDateModal(isShow: boolean) {
      set({ isShowNicknameNotChangeByDateModal: isShow });
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
        isShowWorkTimeNotChangeByDateModal: false,
        isShowWorkTimeChangeModal: false,
        isShowNicknameNotChangeByDateModal: false,
        isShowAddressChangeQuitModal: false,
        isShowAddressDeleteModal: false,
        isShowNicknameChangeConfirmModal: false,
      });
    },
  })),
);
