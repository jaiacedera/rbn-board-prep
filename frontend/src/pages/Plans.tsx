import PageHeader from "../components/PageHeader";
import { useDemo } from "../context/DemoContext";
export default function Plans() {
  const { setAccessOpen } = useDemo();
  return (
    <>
      <PageHeader
        label={"YOUR REVIEW, YOUR PACE"}
        title={"Premium review access"}
        sub={
          "Explore the planned package. Payments and premium access are not active in this prototype."
        }
      />
      <>
        <section className={"section"}>
          <div className={"plan"}>
            <div>
              <span className={"badge premium"}>{"PLANNED PACKAGE"}</span>
              <h3
                style={{
                  marginTop: "20px",
                }}
              >
                {"Complete Review"}
              </h3>
              <p className={"sub"}>
                {"Modules, practice, and support in one place."}
              </p>
              <div className={"price"}>{"Coming soon"}</div>
              <p className={"sub"}>
                {"Pricing and access duration to be set."}
              </p>
              <button
                className={"btn"}
                style={{
                  marginTop: "22px",
                }}
                onClick={() => setAccessOpen(true)}
              >
                {"View access details ↗"}
              </button>
            </div>
            <div>
              <ul>
                <li>{"All published review modules"}</li>
                <li>{"Subject practice question banks"}</li>
                <li>{"Timed mock exams"}</li>
                <li>{"Answers and approved rationales"}</li>
                <li>{"Personalized review suggestions"}</li>
                <li>{"AI tutor access with usage limits"}</li>
              </ul>
            </div>
          </div>
          <div className={"callout"}>
            {
              "Free sample lessons and the sample quiz are available now. Launching paid access requires verified payments, secure student accounts, and a published curriculum."
            }
          </div>
        </section>
      </>
    </>
  );
}
