export default function Footer() {
  return (
    <>
      <footer>
        <a className={"brand"} href={"#home"}>
          <span className={"brand-icon"}>{"✚"}</span>
          <span>
            {"RBN"}
            <span className={"brand-light"}>{"NURSING BOARD REVIEW"}</span>
          </span>
        </a>
        <p>{"One topic. One practice question. One step closer."}</p>
        <span>
          {
            "Interactive prototype · Educational samples · Not affiliated with PRC"
          }
        </span>
      </footer>
    </>
  );
}
