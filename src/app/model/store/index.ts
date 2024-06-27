import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppActions, AppState } from '../types';

const initialState: AppState = {
  currentQuestionIndices: {}
};

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      ...initialState,
      setCurrentQuestionIndex: (testId, index) =>
        set((state) => ({
          currentQuestionIndices: {
            ...state.currentQuestionIndices,
            [testId]: index
          }
        }))
    }),
    { name: 'app-storage' }
  )
);
