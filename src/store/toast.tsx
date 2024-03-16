import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal store **/

interface ToastState {
  isOpen: boolean;
  message: string;
  openToast(): void;
  closeToast(): void;
  setMessage(message: string): void;
}

export const useToastStore = create(
  devtools<ToastState>((set) => ({
    isOpen: false,
    message: '',
    openToast() {
      set({
        isOpen: true,
      });
    },
    closeToast() {
      set({
        isOpen: false,
      });
    },
    setMessage(message: string) {
      set({
        message: message,
      });
    },
  })),
);
