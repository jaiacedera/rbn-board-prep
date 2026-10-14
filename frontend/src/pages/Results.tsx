import { Fragment } from "react";
import PageHeader from "../components/PageHeader";
import Exams from "./Exams";
import { questions } from "../services/demoData";
import { useDemo } from "../context/DemoContext";
export default function Results() {
  const { attempt } = useDemo();
  if (!attempt) return <Exams />;
  return (
    <>
      <PageHeader
        label={"LEARN FROM YOUR ANSWERS"}
        title={"Your sample exam results"}
        sub={
          "Review each rationale and revisit the topics that need attention."
        }
      />
      <>
        <section className={"section quiz"}>
          <div className={"score"}>
            {attempt.score}
            {"%"}
          </div>
          <p className={"sub"}>
            {attempt.correct}
            {" of 5 correct · Sample practice score"}
          </p>
          <div
            className={"actions"}
            style={{
              margin: "25px 0",
            }}
          >
            <a className={"btn"} href={"#tutor"}>
              {"Review with tutor ↗"}
            </a>
            <a className={"btn secondary"} href={"#progress"}>
              {"View my progress"}
            </a>
          </div>
          {questions.map((q, i) => (
            <Fragment key={i}>
              <div className={"result-item"}>
                <span
                  className={
                    attempt.answers[i] === q.answer ? "correct" : "incorrect"
                  }
                >
                  {attempt.answers[i] === q.answer
                    ? "✓ Correct"
                    : "↻ Review this topic"}
                </span>
                <h3
                  style={{
                    fontSize: "16px",
                    margin: "9px 0",
                  }}
                >
                  {i + 1}
                  {". "}
                  {q.q}
                </h3>
                <div>
                  {"Your answer: "}
                  {q.options[attempt.answers[i]]}
                </div>
                <div>
                  <b>{"Correct answer:"}</b> {q.options[q.answer]}
                </div>
                <p>{q.why}</p>
                <span className={"source"}>
                  {"Topic: "}
                  {q.topic}
                  {" · Sample rationale"}
                </span>
              </div>
            </Fragment>
          ))}
          <div className={"callout"}>
            {
              "These sample questions are illustrative practice content, not actual board exam items."
            }
          </div>
        </section>
      </>
    </>
  );
}
