import PageHeader from "../components/PageHeader";
import { useDemo } from "../context/DemoContext";
export default function Lesson() {
  const { progress, completeLesson } = useDemo();
  return (
    <>
      <PageHeader
        label={"FREE SAMPLE · FUNDAMENTALS"}
        title={"The nursing process"}
        sub={
          "A short introduction to ADPIE. Sample educational content for this prototype."
        }
      />
      <>
        <section className={"section lesson"}>
          <div className={"watermark"}>{"RBN · SAMPLE LESSON"}</div>
          <h2>{"Care starts with a clear process."}</h2>
          <p>
            {
              "The nursing process provides a structured way to identify patient needs, plan care, and assess the results. Its five steps are commonly remembered as "
            }
            <b>{"ADPIE"}</b>
            {"."}
          </p>
          <ol>
            <li>
              <b>{"Assessment:"}</b>
              {
                " collect and organize relevant subjective and objective information."
              }
            </li>
            <li>
              <b>{"Diagnosis:"}</b>
              {" identify nursing needs using assessment findings."}
            </li>
            <li>
              <b>{"Planning:"}</b>
              {" set expected outcomes and select appropriate interventions."}
            </li>
            <li>
              <b>{"Implementation:"}</b>
              {" carry out the planned interventions and document care."}
            </li>
            <li>
              <b>{"Evaluation:"}</b>
              {
                " compare the patient’s response with expected outcomes and revise the plan when needed."
              }
            </li>
          </ol>
          <div className={"callout"}>
            <b>{"Remember:"}</b>
            {
              " This is a cycle. Evaluation can lead back to assessment as the patient’s needs change."
            }
          </div>
          <h2>{"Check your understanding"}</h2>
          <p>
            {
              "If a nurse checks whether an expected outcome was achieved, which step are they performing? Explore this in the free practice quiz."
            }
          </p>
          <div className={"actions"}>
            <button
              className={"btn"}
              id={"complete-lesson"}
              onClick={completeLesson}
            >
              {progress.completed.includes("fundamentals")
                ? "✓ Completed"
                : "Mark sample complete"}
            </button>
            <a className={"btn secondary"} href={"#exams"}>
              {"Practice this topic ↗"}
            </a>
            <a className={"text-link"} href={"#tutor"}>
              {"Ask the tutor ↗"}
            </a>
          </div>
          <p className={"sub"}>
            {
              "Source: Prototype sample lesson. Full modules require educator review before release."
            }
          </p>
        </section>
      </>
    </>
  );
}
