import { createRoot } from "react-dom/client";
import App from "./App";
import { DemoProvider } from "./context/DemoContext";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <DemoProvider>
    <App />
  </DemoProvider>,
);
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}
