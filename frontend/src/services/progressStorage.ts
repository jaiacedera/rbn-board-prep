import type { Progress, Attempt } from "../utils/types";
const KEY = "nbp-progress";
export function loadProgress(): Progress {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      completed: Array.isArray(value.completed)
        ? value.completed.filter((id: unknown) => typeof id === "string")
        : [],
      attempts: Array.isArray(value.attempts)
        ? value.attempts.filter(
            (a: Attempt) =>
              a &&
              Array.isArray(a.answers) &&
              a.answers.length === 5 &&
              a.answers.every((n) => Number.isInteger(n) && n >= 0 && n < 4) &&
              Number.isFinite(a.score) &&
              Number.isFinite(a.correct) &&
              typeof a.date === "string",
          )
        : [],
    };
  } catch {
    return { completed: [], attempts: [] };
  }
}
export function saveProgress(progress: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    /* In-memory demo remains usable when storage is disabled. */
  }
}
