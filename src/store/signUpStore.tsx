import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type SignupInfo = {
  name: string;
  nickname: string;
  gender: 'M' | 'F';
  birth: string;
  phoneNumber: string;
  funnelId: string | null; // optional
  recommender: string | null; // optional
};

interface SignupStoreState {
  signupInfo: SignupInfo;

  setSignupInfo(signupInfo: SignupInfo): void;
}

export const useSignupStore = create(
  persist(
    devtools<SignupStoreState>((set) => ({
      signupInfo: {
        name: '',
        nickname: '',
        gender: 'M',
        birth: '',
        phoneNumber: '',
        funnelId: null,
        recommender: null,
      },

      setSignupInfo(signupInfo: SignupInfo) {
        set({ signupInfo: signupInfo });
      },
    })),
    {
      name: 'signup',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSignupStore;
