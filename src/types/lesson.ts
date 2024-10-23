export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Lesson {
  id: number;
  title: string;
  level: string;
  xp: number;
  questions: Question[];
}