import { questions } from "../services/demoData";
import type { Attempt } from "./types";
export function gradeQuiz(answers: (number | null)[]): Attempt {
  if (
    answers.length !== questions.length ||
    answers.some((a) => a === null || !Number.isInteger(a) || a < 0 || a > 3)
  )
    throw new Error("Answer every question before submitting.");
  const correct = questions.filter((q, i) => q.answer === answers[i]).length;
  return {
    answers: answers as number[],
    correct,
    score: (correct / questions.length) * 100,
    date: new Date().toISOString(),
  };
}
