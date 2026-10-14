import type { Progress } from "../utils/types";
import { getRecommendation } from "../utils/recommendation";
export function tutorReply(t: string, progress: Progress): string {
  let answer;
  if (/taglish/i.test(t))
    answer =
      "ADPIE ang madaling tandaan: Assessment, Diagnosis, Planning, Implementation, Evaluation.\n\nUna, alamin ang patient’s needs. Then identify nursing needs, gumawa ng care plan, gawin ang interventions, at tingnan kung na-achieve ang expected outcomes.";
  else if (/quiz/i.test(t))
    answer =
      "Practice question: Which ADPIE step checks whether expected outcomes were achieved?\n\nThink about the step where you compare the patient’s response with the goals. Type your answer.";
  else if (/evaluation/i.test(t))
    answer =
      "Correct for the sample question: Evaluation checks whether expected outcomes were achieved. If they were not, the nurse reassesses and revises the care plan.";
  else if (/next|review|mistake/i.test(t))
    answer = progress.attempts.length
      ? getRecommendation(progress)
      : "Start with the nursing process sample lesson, then take the five-question quiz. Your results will help identify topics to revisit.";
  else if (
    /adpie|nursing process|assessment|diagnosis|planning|implementation/i.test(
      t,
    )
  )
    answer =
      "ADPIE is a simple way to remember the nursing process:\n• Assessment: gather information.\n• Diagnosis: identify nursing needs.\n• Planning: set outcomes and plan interventions.\n• Implementation: carry out care.\n• Evaluation: check the outcomes.\n\nThis is a cycle, so changes in needs can lead to reassessment.";
  else
    answer =
      "This scripted demo can explain ADPIE, show a practice prompt, and suggest a review topic. Choose a sample prompt to try it. The full AI tutor is not connected yet.";
  return answer;
}
