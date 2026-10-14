import { Fragment } from "react";
import PageHeader from "../components/PageHeader";
import Exams from "./Exams";
import { questions } from "../services/demoData";
import { useDemo } from "../context/DemoContext";
export default function Quiz() {
  const { quiz, chooseAnswer, previousQuestion, nextQuestion, exitQuiz } =
    useDemo();
  if (!quiz) return <Exams />;
  const q = questions[quiz.index];
  return (
    <>
      <PageHeader
        label={"FREE PRACTICE"}
        title={"Foundations quick check"}
        sub={
          "Choose one answer for each question. Rationales appear after submission."
        }
      />
      <>
        <section className={"section quiz"}>
          <div className={"quiz-status"}>
            <span>
              {"Question "}
              {quiz.index + 1}
              {" of "}
              {questions.length}
            </span>
            <span>
              {quiz.answers.filter((a) => a !== null).length}
              {" answered"}
            </span>
          </div>
          <div className={"track"}>
            <i
              style={{
                width: ((quiz.index + 1) / questions.length) * 100 + "%",
              }}
            ></i>
          </div>
          <h2 className={"question"}>{q.q}</h2>
          {q.options.map((o, i) => (
            <Fragment key={i}>
              <button
                className={
                  "option " + (quiz.answers[quiz.index] === i ? "chosen" : "")
                }
                onClick={() => chooseAnswer(i)}
                aria-pressed={quiz.answers[quiz.index] === i}
              >
                <span>{"ABCD"[i]}</span>
                {o}
              </button>
            </Fragment>
          ))}
          <div className={"actions"}>
            <button
              className={"btn secondary"}
              id={"previous"}
              onClick={previousQuestion}
              disabled={quiz.index === 0}
            >
              {"← Previous"}
            </button>
            <button
              className={"btn"}
              id={"next"}
              onClick={nextQuestion}
              disabled={quiz.answers[quiz.index] === null}
            >
              {quiz.index === questions.length - 1
                ? "Submit exam"
                : "Next question →"}
            </button>
          </div>
          <button
            className={"text-link"}
            id={"exit-quiz"}
            onClick={exitQuiz}
            style={{
              border: "0",
              background: "none",
              marginTop: "25px",
            }}
          >
            {"Exit sample exam"}
          </button>
        </section>
      </>
    </>
  );
}
