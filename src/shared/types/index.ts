type QuestionType =
  | 'single-choice'
  | 'multiple-choice'
  | 'short-answer'
  | 'long-answer';

interface QuestionBase {
  id: number;
  type: QuestionType;
  question: string;
}

interface SingleChoiceQuestion extends QuestionBase {
  type: 'single-choice';
  options: string[];
  correctAnswer: number;
}

interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple-choice';
  options: string[];
  correctAnswers: number[];
}

interface ShortAnswerQuestion extends QuestionBase {
  type: 'short-answer';
  correctAnswer: string;
}

interface LongAnswerQuestion extends QuestionBase {
  type: 'long-answer';
  correctAnswer: string;
}

export type Question =
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | ShortAnswerQuestion
  | LongAnswerQuestion;

export interface Test {
  id: number;
  title: string;
  timeLimit: number; // in seconds
  questions: Question[];
}
