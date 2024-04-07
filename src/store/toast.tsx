import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface ToastState {
  isShow: boolean;
  message: string;
  showToast(isShow: boolean, message: string): void;
}

export const useToastStore = create(
  devtools<ToastState>((set) => ({
    isShow: false,
    message: '',
    showToast(isShow, message) {
      set({
        isShow: isShow,
        message: message,
      });
    },
  })),
);
