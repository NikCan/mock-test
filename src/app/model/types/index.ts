export type AppState = {
  currentQuestionIndices: Record<number, number>;
};

export type AppActions = {
  setCurrentQuestionIndex: (testId: number, index: number) => void;
};
