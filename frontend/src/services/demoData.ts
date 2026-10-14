import type { ReviewModule, Question } from "../utils/types";
export const modules: ReviewModule[] = [
  {
    id: "fundamentals",
    title: "Fundamentals of Nursing",
    icon: "✚",
    description:
      "Build your foundation in patient safety, the nursing process, and essential care.",
    lessons: 8,
    time: "2 hr 40 min",
    free: true,
  },
  {
    id: "medical",
    title: "Medical–Surgical Nursing",
    icon: "♡",
    description:
      "Review adult health concepts, clinical priorities, and system-based nursing care.",
    lessons: 12,
    time: "4 hr 10 min",
  },
  {
    id: "maternal",
    title: "Maternal & Child Nursing",
    icon: "♧",
    description:
      "Explore maternal care, child development, and family-centered nursing.",
    lessons: 10,
    time: "3 hr 20 min",
  },
  {
    id: "community",
    title: "Community Health Nursing",
    icon: "⌂",
    description:
      "Study health promotion, prevention, and community-centered care.",
    lessons: 7,
    time: "2 hr 15 min",
  },
  {
    id: "mental",
    title: "Mental Health Nursing",
    icon: "☷",
    description:
      "Practice therapeutic communication and review mental health nursing concepts.",
    lessons: 9,
    time: "3 hr",
  },
  {
    id: "pharmacology",
    title: "Pharmacology Essentials",
    icon: "◈",
    description:
      "Organize medication concepts around safety, monitoring, and nursing responsibilities.",
    lessons: 10,
    time: "3 hr 30 min",
  },
];
export const questions: Question[] = [
  {
    q: "Which sequence represents the nursing process?",
    options: [
      "Assessment → Diagnosis → Planning → Implementation → Evaluation",
      "Planning → Assessment → Evaluation → Diagnosis → Implementation",
      "Diagnosis → Implementation → Assessment → Planning → Evaluation",
      "Evaluation → Planning → Diagnosis → Assessment → Implementation",
    ],
    answer: 0,
    why: "The nursing process follows ADPIE: Assessment, Diagnosis, Planning, Implementation, and Evaluation. It is an ongoing cycle; evaluation may lead to reassessment.",
    topic: "The nursing process",
  },
  {
    q: "Which action best supports patient identification before a nursing procedure?",
    options: [
      "Use the patient’s room number",
      "Ask another patient to confirm the name",
      "Use two approved patient identifiers according to facility policy",
      "Recognize the patient by appearance",
    ],
    answer: 2,
    why: "Two approved identifiers help match the correct patient with the intended care. A room number or appearance alone does not reliably establish identity.",
    topic: "Patient safety",
  },
  {
    q: "Which statement is an example of therapeutic communication?",
    options: [
      "You should not feel that way.",
      "Everything will definitely be fine.",
      "I know exactly how you feel.",
      "Tell me more about what is worrying you.",
    ],
    answer: 3,
    why: "An open-ended invitation encourages the patient to describe their concerns. Dismissing feelings, making guarantees, or assuming an identical experience can limit communication.",
    topic: "Communication",
  },
  {
    q: "Which entry is objective assessment data?",
    options: [
      "The patient reports feeling anxious",
      "The patient says the pain is severe",
      "The measured temperature is 37.0°C",
      "The patient describes feeling tired",
    ],
    answer: 2,
    why: "Objective data are observed or measured. A measured temperature is objective; the patient’s reported feelings and symptoms are subjective data.",
    topic: "Assessment",
  },
  {
    q: "What is the main purpose of the evaluation step?",
    options: [
      "Determine whether expected outcomes were achieved",
      "Replace all assessment findings",
      "Select a diagnosis before collecting information",
      "Document only the initial care plan",
    ],
    answer: 0,
    why: "Evaluation compares the patient’s response with expected outcomes and helps determine whether the plan should continue or change.",
    topic: "The nursing process",
  },
];

export const dashboardTopics: [string, number][] = [
  ["Fundamentals", 85],
  ["Medical–Surgical", 62],
  ["Maternal & Child", 45],
];
