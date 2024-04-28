import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

type SignupInfo = {
  name: string;
  nickname: string;
  gender: 'M' | 'F';
  birth: string;
  funnelId?: number;
  recommender?: string;
};

interface SignupStoreState {
  signupInfo: SignupInfo;
}

export const useSignupStore = create(
  devtools<SignupStoreState>((set) => ({
    signupInfo: {
      name: '',
      nickname: '',
      gender: 'M',
      birth: '',
      funnelId: 0,
      recommender: '',
    },

    setSignupInfo(signupInfo: SignupInfo) {
      set({ signupInfo: signupInfo });
    },
  })),
);
