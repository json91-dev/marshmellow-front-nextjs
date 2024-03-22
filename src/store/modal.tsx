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

  showAuthFailModal(isShow: boolean): void;
  showAuthSuccessModal(isShow: boolean): void;
  showQuitModal(isShow: boolean): void;
  showExistNumberModal(isShow: boolean): void;
  showTermsBottomSheet(isShow: boolean): void;
  showQuitInfoModal(isShow: boolean): void;
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

    closeAll() {
      set({
        isShowAuthFailModal: false,
        isShowTermsBottomSheet: false,
        isShowAuthSuccessModal: false,
        isShowExistNumberModal: false,
        isShowQuitModal: false,
        isShowQuitInfoModal: false,
      });
    },
  })),
);