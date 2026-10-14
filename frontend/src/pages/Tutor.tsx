import PageHeader from "../components/PageHeader";
import ChatLog from "../components/ChatLog";
import { useState } from "react";
import { useDemo } from "../context/DemoContext";
export default function Tutor() {
  const { chat, sendChat } = useDemo();
  const [message, setMessage] = useState("");
  return (
    <>
      <PageHeader
        label={"A LITTLE HELP WHEN YOU NEED IT"}
        title={"Your review tutor"}
        sub={
          "Explore a scripted demonstration. Live AI responses are not enabled."
        }
      />
      <>
        <section className={"section tutor-layout"}>
          <aside className={"tutor-side"}>
            <h3>{"Try a conversation"}</h3>
            <button
              className={"prompt"}
              onClick={() => sendChat("Explain ADPIE simply")}
            >
              {"Explain ADPIE simply ↗"}
            </button>
            <button
              className={"prompt"}
              onClick={() => sendChat("Explain in Taglish")}
            >
              {"Explain in Taglish ↗"}
            </button>
            <button
              className={"prompt"}
              onClick={() => sendChat("Quiz me on the nursing process")}
            >
              {"Quiz me on the nursing process ↗"}
            </button>
            <button
              className={"prompt"}
              onClick={() => sendChat("What should I review next?")}
            >
              {"What should I review next? ↗"}
            </button>
            <p className={"sub"}>
              {
                "In the full version, the tutor will reference approved modules you have access to."
              }
            </p>
          </aside>
          <div className={"conversation"}>
            <div className={"conversation-head"}>
              <div className={"subject-icon"}>{"✧"}</div>
              <div>
                <b>{"RBN Tutor"}</b>
                <small>{"Scripted demo · Sample lesson only"}</small>
              </div>
            </div>
            <ChatLog messages={chat} />
            <form
              className={"chat-form"}
              id={"chat-form"}
              onSubmit={(event) => {
                event.preventDefault();
                if (message.trim()) sendChat(message.trim());
                setMessage("");
              }}
            >
              <input
                id={"chat-input"}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={500}
                placeholder={"Ask about the nursing process…"}
                aria-label={"Message to demo tutor"}
                required
              />
              <button className={"btn"} type={"submit"}>
                {"Send ↗"}
              </button>
            </form>
            <p
              className={"sub"}
              style={{
                fontSize: "10px",
              }}
            >
              {"Learning support only. Medical content needs educator review."}
            </p>
          </div>
        </section>
      </>
    </>
  );
}
