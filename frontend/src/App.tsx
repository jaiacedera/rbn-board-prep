import type { ComponentType } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import { useHashRoute } from "./hooks/useHashRoute";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import Lesson from "./pages/Lesson";
import Exams from "./pages/Exams";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Progress from "./pages/Progress";
import Tutor from "./pages/Tutor";
import Plans from "./pages/Plans";
import ContactUs from "./pages/ContactUs";
const pages: Record<string, ComponentType> = {
  home: Home,
  modules: Modules,
  lesson: Lesson,
  exams: Exams,
  quiz: Quiz,
  results: Results,
  progress: Progress,
  tutor: Tutor,
  plans: Plans,
  contact: ContactUs,
  "contact-us": ContactUs,
};
export default function App() {
  const route = useHashRoute();
  const Page = pages[route] || Home;
  return (
    <>
      <Navbar page={route} />
      <main id="app">
        <Page />
      </main>
      <Footer />
      <Feedback />
    </>
  );
}
