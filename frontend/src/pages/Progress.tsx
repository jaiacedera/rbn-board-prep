import { Fragment } from "react";
import PageHeader from "../components/PageHeader";
import { getRecommendation } from "../utils/recommendation";
import { useDemo } from "../context/DemoContext";
export default function Progress() {
  const { progress, showResult } = useDemo();
  const best = progress.attempts.length
    ? Math.max(...progress.attempts.map((a) => a.score))
    : null;
  return (
    <>
      <PageHeader
        label={"YOUR LEARNING JOURNEY"}
        title={"My progress"}
        sub={"Your sample activity is saved in this browser."}
      />
      <>
        <section className={"section"}>
          <div className={"progress-grid"}>
            <div className={"stat"}>
              <span>{"Completed samples"}</span>
              <strong>{progress.completed.length}</strong>
            </div>
            <div className={"stat"}>
              <span>{"Exam attempts"}</span>
              <strong>{progress.attempts.length}</strong>
            </div>
            <div className={"stat"}>
              <span>{"Best sample score"}</span>
              <strong>{best === null ? "—" : best + "%"}</strong>
            </div>
          </div>
          <div className={"section-head"}>
            <h2>{"Recent practice"}</h2>
            <a className={"text-link"} href={"#exams"}>
              {"Practice again ↗"}
            </a>
          </div>
          {progress.attempts.length ? (
            progress.attempts
              .slice()
              .reverse()
              .map((a, i) => (
                <Fragment key={i}>
                  <div
                    className={"callout"}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <b>{"Foundations quick check"}</b>
                      <br />
                      {new Date(a.date).toLocaleString()}
                      {" · "}
                      {a.correct}
                      {"/5 correct"}
                    </div>
                    <button
                      className={"btn secondary small"}
                      onClick={() =>
                        showResult(progress.attempts.length - 1 - i)
                      }
                    >
                      {a.score}
                      {"% · Review ↗"}
                    </button>
                  </div>
                </Fragment>
              ))
          ) : (
            <>
              <div className={"callout"}>
                {
                  "Your first attempt starts here. Take the sample exam to see your results and review areas."
                }
              </div>
            </>
          )}
          <h2
            style={{
              marginTop: "35px",
            }}
          >
            {"Recommended next step"}
          </h2>
          <div className={"callout"}>
            {progress.attempts.length
              ? getRecommendation(progress)
              : "Start with the nursing process sample lesson, then try the foundations quick check."}
            <br />
            <a className={"text-link"} href={"#lesson"}>
              {"Open sample lesson ↗"}
            </a>
          </div>
          <p className={"sub"}>
            {
              "Recommendations use simple rules in this demo. A trained ML model is not connected."
            }
          </p>
        </section>
      </>
    </>
  );
}
