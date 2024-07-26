import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type SignupInfo = {
  name: string;
  nickname: string;
  gender: 'M' | 'F';
  birth: string;
  funnelId?: string;
  recommender?: string;
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
        funnelId: '',
        recommender: '',
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
