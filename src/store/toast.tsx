import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface ToastState {
  isShow: boolean;
  message: string;
  showToast(isShow: boolean): void;
  setMessage(message: string): void;
}

export const useToastStore = create(
  devtools<ToastState>((set) => ({
    isShow: false,
    message: '',
    showToast(isShow) {
      set({
        isShow: isShow,
      });
    },

    setMessage(message: string) {
      set({
        message: message,
      });
    },
  })),
);
