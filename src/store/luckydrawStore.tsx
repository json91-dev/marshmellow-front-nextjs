import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

/** Modal store **/
interface InitialState {
  taxInfo: {
    isAgreeToTax: boolean;
    isTransferTax: boolean;
    identificationCardImg: File | null;
    email: string | null;
    address: string | null;
    currentStep: number;
  };
  setTaxInfo(updatedTaxInfo: Partial<InitialState['taxInfo']>): void;
}

export const useLuckyDrawStore = create(
  persist(
    devtools<InitialState>((set) => ({
      taxInfo: {
        isAgreeToTax: false,
        isTransferTax: false,
        identificationCardImg: null,
        email: '',
        address: '',
        currentStep: -1,
      },

      info: {
        address: '',
      },

      setTaxInfo: (updatedTaxInfo: Partial<InitialState['taxInfo']>) =>
        set((state) => ({
          taxInfo: {
            ...state.taxInfo,
            ...updatedTaxInfo,
          },
        })),
    })),
    {
      name: 'luckydraw',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLuckyDrawStore;
