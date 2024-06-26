import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AppActions, AppState } from '../types';

const initialState: AppState = {
  currentQuestionIndices: {}
};

export const useAppStore = create<AppState & AppActions>()(
  persist(
    immer((set) => ({
      ...initialState,
      setCurrentQuestionIndex: (testId, index) =>
        set((state) => ({
          currentQuestionIndices: {
            ...state.currentQuestionIndices,
            [testId]: index
          }
        }))
    })),
    { name: 'app-storage' }
  )
);
