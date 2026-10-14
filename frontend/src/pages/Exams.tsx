import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { useDemo } from "../context/DemoContext";
export default function Exams() {
  const { setAccessOpen, startQuiz } = useDemo();
  return (
    <>
      <PageHeader
        label={"PRACTICE WITH PURPOSE"}
        title={"Practice exams"}
        sub={"Test your understanding, then learn from your answers."}
      />
      <>
        <section className={"section"}>
          <div className={"grid"}>
            <Card>
              <div className={"card-top"}>
                <div className={"subject-icon"}>{"☷"}</div>
                <span className={"badge"}>{"FREE SAMPLE"}</span>
              </div>
              <h3>{"Foundations quick check"}</h3>
              <p>
                {
                  "Try a short quiz on the nursing process, communication, assessment, and patient safety."
                }
              </p>
              <div className={"card-meta"}>
                {"5 questions · Untimed · Rationales after submission"}
              </div>
              <button className={"btn"} id={"start-quiz"} onClick={startQuiz}>
                {"Start sample exam ↗"}
              </button>
            </Card>
            <Card>
              <div className={"card-top"}>
                <div className={"subject-icon"}>{"◷"}</div>
                <span className={"badge premium"}>{"PREMIUM · LOCKED"}</span>
              </div>
              <h3>{"Subject practice exams"}</h3>
              <p>
                {
                  "Focused question sets for each nursing subject, with explanations to help you review."
                }
              </p>
              <div className={"card-meta"}>
                {"Planned feature · Configurable difficulty"}
              </div>
              <button
                className={"btn secondary"}
                onClick={() => setAccessOpen(true)}
              >
                {"View premium access ↗"}
              </button>
            </Card>
            <Card>
              <div className={"card-top"}>
                <div className={"subject-icon"}>{"▤"}</div>
                <span className={"badge premium"}>{"PREMIUM · LOCKED"}</span>
              </div>
              <h3>{"Timed mock exams"}</h3>
              <p>
                {
                  "Practice answering under a time limit and review performance across topics."
                }
              </p>
              <div className={"card-meta"}>
                {"Planned feature · Timed sessions"}
              </div>
              <button
                className={"btn secondary"}
                onClick={() => setAccessOpen(true)}
              >
                {"View premium access ↗"}
              </button>
            </Card>
          </div>
          <div className={"callout"}>
            {
              "This prototype includes a five-question sample quiz. Premium question banks and official exam coverage are not loaded."
            }
          </div>
        </section>
      </>
    </>
  );
}
