import MobileDrawer from "./MobileDrawer";
export default function Navbar({ page }: { page: string }) {
  return (
    <>
      <header>
        <a className={"brand"} href={"#home"}>
          <span className={"brand-icon"}>{"✚"}</span>
          <span>
            {"RBN"}
            <span className={"brand-light"}>{"NURSING BOARD REVIEW"}</span>
          </span>
        </a>
        <MobileDrawer>
          <nav aria-label={"Main navigation"}>
            <a
              href={"#home"}
              data-page={"home"}
              className={page === "home" ? "active" : undefined}
            >
              {"Home"}
            </a>
            <a
              href={"#modules"}
              data-page={"modules"}
              className={page === "modules" ? "active" : undefined}
            >
              {"Review Modules"}
            </a>
            <a
              href={"#exams"}
              data-page={"exams"}
              className={page === "exams" ? "active" : undefined}
            >
              {"Practice Exams"}
            </a>
            <a
              href={"#tutor"}
              data-page={"tutor"}
              className={page === "tutor" ? "active" : undefined}
            >
              {"AI Tutor "}
              <span className={"tiny"}>{"DEMO"}</span>
            </a>
            <a
              href={"#plans"}
              data-page={"plans"}
              className={page === "plans" ? "active" : undefined}
            >
              {"Plans"}
            </a>
          </nav>
        </MobileDrawer>
        <a className={"btn small"} href={"#progress"}>
          {"My Progress "}
          <span>{"↗"}</span>
        </a>
      </header>
    </>
  );
}
