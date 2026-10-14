import { useDemo } from "../context/DemoContext";
import Dialog from "./Dialog";
export default function Feedback() {
  const { accessOpen, setAccessOpen, toast } = useDemo();
  return (
    <>
      <Dialog open={accessOpen} onClose={() => setAccessOpen(false)}>
        <div className="eyebrow">PREMIUM ACCESS PREVIEW</div>
        <h2>Your complete review space.</h2>
        <p>
          Paid modules, exams, rationales, and live AI tutoring will become
          available after the curriculum, payment provider, and secure student
          accounts are connected.
        </p>
        <div className="callout">
          No payment is collected here. Premium materials remain locked in this
          prototype.
        </div>
        <a
          className="btn"
          href="#modules"
          id="modal-sample"
          onClick={() => setAccessOpen(false)}
        >
          Explore the free sample ↗
        </a>
      </Dialog>
      <div
        id="toast"
        role="status"
        style={{ display: toast ? "block" : "none" }}
      >
        {toast}
      </div>
    </>
  );
}
