import { Fragment, useEffect, useRef } from "react";
import type { ChatMessage } from "../utils/types";
export default function ChatLog({ messages }: { messages: ChatMessage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);
  return (
    <div className="chat-log" id="chat-log" ref={ref}>
      {messages.length ? (
        messages.map((m, index) => (
          <Fragment key={index}>
            <div className={`bubble ${m.role === "user" ? "user" : ""}`}>
              {m.text.split("\n").map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </div>
            {m.role === "tutor" && (
              <div className="source">
                Source: Nursing process sample · Scripted response
              </div>
            )}
          </Fragment>
        ))
      ) : (
        <div className="bubble">
          Hello! Try one of the sample prompts to see how a review tutor could
          help you understand a lesson.
        </div>
      )}
    </div>
  );
}
