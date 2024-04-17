import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface IdentifyModalState {
  isShowAuthFailModal: boolean;
  isShowAuthSuccessModal: boolean;
  isShowQuitModal: boolean;
  isShowExistNumberModal: boolean;
  isShowTermsBottomSheet: boolean;
  isShowQuitInfoModal: boolean;
  isShowRankingChartModal: boolean;
  isShowNicknameChangeModal: boolean;
  isShowWorkTimeBottomSheet: boolean;
  isShowWithdrawConfirmModal: boolean;
  isShowWithdrawConfirmCompleteModal: boolean;
  isShowMallowFilterDateBottomSheet: boolean;
  isShowMallowExpiredThisMonthModal: boolean;

  showAuthFailModal(isShow: boolean): void;
  showAuthSuccessModal(isShow: boolean): void;
  showQuitModal(isShow: boolean): void;
  showExistNumberModal(isShow: boolean): void;
  showTermsBottomSheet(isShow: boolean): void;
  showQuitInfoModal(isShow: boolean): void;
  showRankingChartModal(isShow: boolean): void;
  showNicknameChangeModal(isShow: boolean): void;
  showWorkTimeBottomSheet(isShow: boolean): void;
  showWithdrawConfirmModal(isShow: boolean): void;
  showWithdrawConfirmCompleteModal(isShow: boolean): void;
  showMallowFilterDateBottomSheet(isShow: boolean): void;
  showMallowExpiredThisMonthModal(isShow: boolean): void;
  closeAll(): void;
}

export const useModalStore = create(
  devtools<IdentifyModalState>((set) => ({
    isShowAuthFailModal: false,
    isShowAuthSuccessModal: false,
    isShowQuitModal: false,
    isShowTermsBottomSheet: false,
    isShowExistNumberModal: false,
    isShowQuitInfoModal: false,
    isShowRankingChartModal: false,
    isShowNicknameChangeModal: false,
    isShowWorkTimeBottomSheet: false,
    isShowWithdrawConfirmModal: false,
    isShowWithdrawConfirmCompleteModal: false,
    isShowMallowFilterDateBottomSheet: false,
    isShowMallowExpiredThisMonthModal: false,

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
        isShowWithdrawConfirmModal: false,
        isShowWithdrawConfirmCompleteModal: false,
        isShowMallowFilterDateBottomSheet: false,
        isShowMallowExpiredThisMonthModal: false,
      });
    },
  })),
);
