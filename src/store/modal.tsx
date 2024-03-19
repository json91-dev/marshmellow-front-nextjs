import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface IdentifyModalState {
  isOpenAuthFailModal: boolean;
  isOpenAuthSuccessModal: boolean;
  isOpenQuitModal: boolean;
  isOpenExistNumberModal: boolean;
  isOpenTermsBottomSheet: boolean;
  isOpenQuitInfoModal: boolean;

  openAuthFailModal(): void;
  closeAuthFailModal(): void;
  openAuthSuccessModal(): void;
  closeAuthSuccessModal(): void;
  openQuitModal(): void;
  closeQuitModal(): void;
  openExistNumberModal(): void;
  closeExistNumberModal(): void;
  openTermsBottomSheet(): void;
  closeTermsBottomSheet(): void;
  openQuitInfoModal(): void;
  closeQuitInfoModal(): void;
  closeAll(): void;
}

export const useModalStore = create(
  devtools<IdentifyModalState>((set) => ({
    isOpenAuthFailModal: false,
    isOpenAuthSuccessModal: false,
    isOpenQuitModal: false,
    isOpenTermsBottomSheet: false,
    isOpenExistNumberModal: false,
    isOpenQuitInfoModal: false,

    openAuthFailModal() {
      set({ isOpenAuthFailModal: true });
    },
    closeAuthFailModal() {
      set({ isOpenAuthFailModal: false });
    },
    openAuthSuccessModal() {
      set({ isOpenAuthSuccessModal: true });
    },
    closeAuthSuccessModal() {
      set({ isOpenAuthSuccessModal: false });
    },
    openQuitModal() {
      set({ isOpenQuitModal: true });
    },
    closeQuitModal() {
      set({ isOpenQuitModal: false });
    },
    openTermsBottomSheet() {
      set({ isOpenTermsBottomSheet: true });
    },
    closeTermsBottomSheet() {
      set({ isOpenTermsBottomSheet: false });
    },
    openExistNumberModal() {
      set({ isOpenExistNumberModal: true });
    },
    closeExistNumberModal() {
      set({ isOpenExistNumberModal: false });
    },
    openQuitInfoModal() {
      set({ isOpenQuitInfoModal: true });
    },
    closeQuitInfoModal() {
      set({ isOpenQuitInfoModal: false });
    },
    closeAll() {
      set({
        isOpenAuthFailModal: false,
        isOpenTermsBottomSheet: false,
        isOpenAuthSuccessModal: false,
        isOpenExistNumberModal: false,
        isOpenQuitModal: false,
        isOpenQuitInfoModal: false,
      });
    },
  })),
);
