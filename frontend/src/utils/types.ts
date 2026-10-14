export interface ReviewModule {
  id: string;
  title: string;
  icon: string;
  description: string;
  lessons: number;
  time: string;
  free?: boolean;
}
export interface Question {
  q: string;
  options: string[];
  answer: number;
  why: string;
  topic: string;
}
export interface Attempt {
  answers: number[];
  correct: number;
  score: number;
  date: string;
}
export interface Progress {
  completed: string[];
  attempts: Attempt[];
}
export interface QuizState {
  index: number;
  answers: (number | null)[];
}
export interface ChatMessage {
  role: "user" | "tutor";
  text: string;
}
