import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MallowStateType } from '@/app/my/mallow/page';

/** Modal store **/
interface InitialState {
  taxInfo: {
    isAgreeToTax: boolean;
    isTransferTax: boolean;
    certificationImgFile: File | null;
    email: string | null;
    address: string | null;
  };
}

export const useLuckyDrawStore = create(
  devtools<InitialState>((set) => ({
    taxInfo: {
      isAgreeToTax: false,
      isTransferTax: false,
      certificationImgFile: null,
      email: '',
      address: '',
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
);

export default useLuckyDrawStore;
