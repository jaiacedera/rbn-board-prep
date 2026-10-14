import { useEffect, useState } from "react";
import type { Attempt, ChatMessage, QuizState } from "../utils/types";
import { loadProgress, saveProgress } from "../services/progressStorage";
import { tutorReply } from "../services/demoTutor";
import { questions } from "../services/demoData";
import { gradeQuiz } from "../utils/quiz";

export function useDemoState() {
  const [progress, setProgress] = useState(loadProgress);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [attempt, setAttempt] = useState<Attempt | null>(
    () => progress.attempts.at(-1) || null,
  );
  const [filter, updateFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [accessOpen, setAccessOpen] = useState(false);
  const [toast, setToast] = useState("");
  useEffect(() => saveProgress(progress), [progress]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 3500);
    return () => window.clearTimeout(timer);
  }, [toast]);
  useEffect(() => {
    const onRoute = () => {
      if (location.hash !== "#quiz") setQuiz(null);
      setSearch("");
    };
    window.addEventListener("hashchange", onRoute);
    return () => window.removeEventListener("hashchange", onRoute);
  }, []);
  function startQuiz() {
    setQuiz({ index: 0, answers: Array(questions.length).fill(null) });
    location.hash = "quiz";
  }
  function chooseAnswer(answer: number) {
    setQuiz(
      (current) =>
        current && {
          ...current,
          answers: current.answers.map((a, i) =>
            i === current.index ? answer : a,
          ),
        },
    );
  }
  function previousQuestion() {
    setQuiz(
      (current) =>
        current && { ...current, index: Math.max(0, current.index - 1) },
    );
  }
  function nextQuestion() {
    if (!quiz || quiz.answers[quiz.index] === null) return;
    if (quiz.index < questions.length - 1) {
      setQuiz({ ...quiz, index: quiz.index + 1 });
      return;
    }
    const result = gradeQuiz(quiz.answers);
    setProgress((current) => ({
      ...current,
      attempts: [...current.attempts, result],
    }));
    setAttempt(result);
    setQuiz(null);
    location.hash = "results";
  }
  function exitQuiz() {
    setQuiz(null);
    location.hash = "exams";
  }
  function showResult(index: number) {
    setAttempt(progress.attempts[index]);
    location.hash = "results";
  }
  function completeLesson() {
    setProgress((current) => ({
      ...current,
      completed: current.completed.includes("fundamentals")
        ? current.completed
        : [...current.completed, "fundamentals"],
    }));
    setToast("Sample lesson marked complete");
  }
  function sendChat(text: string) {
    setChat((current) => [
      ...current,
      { role: "user", text },
      { role: "tutor", text: tutorReply(text, progress) },
    ]);
  }
  function setFilter(value: string) {
    updateFilter(value);
    setSearch("");
  }
  return {
    progress,
    quiz,
    attempt,
    filter,
    search,
    chat,
    accessOpen,
    toast,
    setSearch,
    setFilter,
    setAccessOpen,
    startQuiz,
    chooseAnswer,
    previousQuestion,
    nextQuestion,
    exitQuiz,
    showResult,
    completeLesson,
    sendChat,
  };
}
