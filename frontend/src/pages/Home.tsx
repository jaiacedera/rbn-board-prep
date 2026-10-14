import { Fragment } from "react";
import ModuleCard from "../components/ModuleCard";
import { modules, dashboardTopics } from "../services/demoData";
export default function Home() {
  return (
    <>
      <section className={"hero"}>
        <div className={"hero-inner"}>
          <div>
            <div className={"eyebrow"}>
              <span className={"dot"}></span>
              {"YOUR NURSING BOARD REVIEW COMPANION"}
            </div>
            <h1>
              {"A little more prepared."}
              <br />
              {"A lot more "}
              <em>{"confident."}</em>
            </h1>
            <p>
              {
                "Build your knowledge, practice with purpose, and understand every answer. Your nursing board review starts here."
              }
            </p>
            <div className={"actions"}>
              <a className={"btn"} href={"#modules"}>
                {"Start reviewing "}
                <span>{"↗"}</span>
              </a>
              <a className={"btn ghost"} href={"#exams"}>
                {"Try a practice exam"}
              </a>
            </div>
            <div className={"hero-note"}>
              <span>{"✓ Organized review modules"}</span>
              <span>{"✓ Answer rationales"}</span>
              <span>{"✓ Guided learning"}</span>
            </div>
          </div>
          <div
            className={"showcase"}
            aria-label={"Illustrative student dashboard"}
          >
            <div className={"dash"}>
              <div className={"dash-top"}>
                {"✚   MY REVIEW SPACE "}
                <span>{"ILLUSTRATIVE PREVIEW"}</span>
              </div>
              <h3>{"You’re making progress."}</h3>
              <p>{"Small steps today. Stronger foundations tomorrow."}</p>
              <div className={"metric-row"}>
                <div className={"metric"}>
                  <span>{"MODULE PROGRESS"}</span>
                  <strong>
                    {"6"}
                    <span>{"/ 8"}</span>
                  </strong>
                  <small>{"Keep it going ↗"}</small>
                </div>
                <div className={"metric"}>
                  <span>{"PRACTICE SCORE"}</span>
                  <strong>
                    {"84"}
                    <span>{"%"}</span>
                  </strong>
                  <small>{"Latest sample score"}</small>
                </div>
                <div className={"metric"}>
                  <span>{"STUDY STREAK"}</span>
                  <strong>
                    {"5"}
                    <span>{" days"}</span>
                  </strong>
                  <small>{"A little every day"}</small>
                </div>
              </div>
              <div className={"dash-label"}>{"Your subject overview"}</div>
                {dashboardTopics.map(([t, v], index) => (
                <Fragment key={index}>
                  <div className={"dash-topic"}>
                    <span>{t}</span>
                    <div className={"track"}>
                      <i
                        style={{
                          width: v + "%",
                        }}
                      ></i>
                    </div>
                    <b>
                      {v}
                      {"%"}
                    </b>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className={"float-card"}>
              <div className={"float-icon"}>{"✧"}</div>
              <div>
                <b>{"A review plan that understands you"}</b>
                <span>
                  {"Focus on your weak topics, one practice session at a time."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={"strip"}>
        <span>
          <b>{"01"}</b>
          {" Learn at your own pace"}
        </span>
        <span>
          <b>{"02"}</b>
          {" Practice with rationales"}
        </span>
        <span>
          <b>{"03"}</b>
          {" See your progress"}
        </span>
        <span>
          <b>{"04"}</b>
          {" Get guided support"}
        </span>
      </div>
      <section className={"section"}>
        <div className={"section-head"}>
          <div>
            <div className={"eyebrow"}>{"BUILD YOUR FOUNDATION"}</div>
            <h2>{"Your next chapter starts here."}</h2>
            <p className={"sub"}>
              {"Explore focused subjects for your nursing board preparation."}
            </p>
          </div>
          <a className={"text-link"} href={"#modules"}>
            {"All modules ↗"}
          </a>
        </div>
        <div className={"grid"}>
          {modules.slice(0, 3).map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      </section>
      <section className={"soft"}>
        <div className={"section feature"}>
          <div>
            <div className={"eyebrow"}>
              {"UNDERSTAND. DON’T JUST MEMORIZE."}
            </div>
            <h2>
              {"A little help when"}
              <br />
              {"a topic doesn’t click."}
            </h2>
            <p>
              {
                "Ask for a simpler explanation, work through a mistake, or practice one question at a time with your review tutor."
              }
            </p>
            <a className={"btn"} href={"#tutor"}>
              {"Explore the tutor demo "}
              <span>{"↗"}</span>
            </a>
            <p
              style={{
                fontSize: "10px",
              }}
            >
              {"Scripted preview. Live AI integration is not connected yet."}
            </p>
          </div>
          <div className={"conversation"}>
            <div className={"conversation-head"}>
              <div className={"subject-icon"}>{"✧"}</div>
              <div>
                <b>{"Your review tutor"}</b>
                <small>{"A learning companion, at your pace"}</small>
              </div>
            </div>
            <div className={"bubble user"}>
              {"How do I remember the nursing process?"}
            </div>
            <div className={"bubble"}>
              {"Think "}
              <b>{"ADPIE"}</b>
              {": Assess, Diagnose, Plan, Implement, Evaluate."}
              <br />
              <br />
              {
                "First, understand the situation. Then identify needs, plan care, carry it out, and check the outcome."
              }
            </div>
            <div className={"source"}>
              {"↗ Source: Sample lesson · The nursing process"}
            </div>
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className={"section-head"}>
          <div>
            <div className={"eyebrow"}>{"PUT YOUR LEARNING INTO PRACTICE"}</div>
            <h2>{"Make every answer count."}</h2>
            <p className={"sub"}>
              {
                "Try five sample questions and review the reasoning after you submit."
              }
            </p>
          </div>
          <a className={"btn secondary"} href={"#exams"}>
            {"Take a sample exam ↗"}
          </a>
        </div>
      </section>
    </>
  );
}
