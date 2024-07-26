import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MallowStateType } from '@/app/my/mallow/page';

/** Modal store **/
interface MallowState {
  history: {
    filterState: MallowStateType;
    filterMonth: number;
  };

  setHistoryFilterState(state: MallowStateType): void;
  setHistoryFilterMonth(month: number): void;
}

export const useMallowHistoryStore = create(
  devtools<MallowState>((set) => ({
    history: {
      filterState: 'ALL',
      filterMonth: 1,
    },
    setHistoryFilterState(mallowState: MallowStateType) {
      set((state) => ({
        ...state,
        history: {
          ...state.history,
          filterState: mallowState,
        },
      }));
    },
    setHistoryFilterMonth(month: number) {
      set((state) => ({
        ...state,
        history: {
          ...state.history,
          filterMonth: month,
        },
      }));
    },
  })),
);

export default useMallowHistoryStore;
