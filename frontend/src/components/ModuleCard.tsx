import type { ReviewModule } from "../utils/types";
import { useDemo } from "../context/DemoContext";
import Card from "./Card";
export default function ModuleCard({ module: m }: { module: ReviewModule }) {
  const { progress, setAccessOpen } = useDemo();
  return (
    <Card>
      <div className="card-top">
        <div className="subject-icon">{m.icon}</div>
        <span className={`badge ${m.free ? "" : "premium"}`}>
          {m.free ? "FREE SAMPLE" : "PREMIUM · LOCKED"}
        </span>
      </div>
      <h3>{m.title}</h3>
      <p>{m.description}</p>
      <div className="card-meta">
        {m.lessons} planned lessons &nbsp;·&nbsp; {m.time} estimated
      </div>
      <div className="card-bottom">
        <span>
          {progress.completed.includes(m.id)
            ? "✓ Sample completed"
            : m.free
              ? "Start with a sample lesson"
              : "Full curriculum preview"}
        </span>
        <button
          onClick={() => {
            if (m.id === "fundamentals") location.hash = "lesson";
            else setAccessOpen(true);
          }}
        >
          {m.free ? "Open lesson" : "View access"} ↗
        </button>
      </div>
    </Card>
  );
}
