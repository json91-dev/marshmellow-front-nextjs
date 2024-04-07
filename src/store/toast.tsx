import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface ToastState {
  isOpen: boolean;
  message: string;
  openToast(message: string): void;
  closeToast(): void;
}

export const useToastStore = create(
  devtools<ToastState>((set) => ({
    isOpen: false,
    message: '',
    openToast(message) {
      set({
        isOpen: true,
        message: message,
      });
    },
    closeToast() {
      set({ isOpen: false });
    },
  })),
);
