import { questions } from "../services/demoData";
import type { Progress } from "./types";
export function getRecommendation(progress: Progress) {
  const a = progress.attempts.at(-1);
  if (!a)
    return "Start with the nursing process sample lesson, then take the five-question quiz. Your results will help identify topics to revisit.";

  let topics = [
    ...new Set(
      questions.filter((q, i) => a.answers[i] !== q.answer).map((q) => q.topic),
    ),
  ];
  return topics.length
    ? "Focus your next review on: " + topics.join(", ") + "."
    : "You answered every sample question correctly. Revisit the lesson to reinforce your understanding.";
}
