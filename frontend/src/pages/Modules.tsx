import PageHeader from "../components/PageHeader";
import ModuleCard from "../components/ModuleCard";
import { modules } from "../services/demoData";
import { useDemo } from "../context/DemoContext";
export default function Modules() {
  const { filter, search, setFilter, setSearch } = useDemo();
  const filteredModules = modules.filter(
    (m) =>
      (filter === "all" || (filter === "free" ? m.free : !m.free)) &&
      m.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        label={"YOUR REVIEW LIBRARY"}
        title={"Review modules"}
        sub={
          "Build your foundation, one topic at a time. Premium curriculum is a preview."
        }
      />
      <>
        <section className={"section"}>
          <div className={"filters"}>
            <button
              className={"filter " + (filter === "all" ? "selected" : "")}
              onClick={() => setFilter("all")}
            >
              {"All subjects"}
            </button>
            <button
              className={"filter " + (filter === "free" ? "selected" : "")}
              onClick={() => setFilter("free")}
            >
              {"Free sample"}
            </button>
            <button
              className={"filter " + (filter === "premium" ? "selected" : "")}
              onClick={() => setFilter("premium")}
            >
              {"Premium"}
            </button>
            <input
              className={"search"}
              id={"module-search"}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={"Search modules…"}
              aria-label={"Search modules"}
            />
          </div>
          <div className={"grid"} id={"module-grid"}>
            {filteredModules.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
            {filteredModules.length === 0 && (
              <p className="sub">No modules match your search.</p>
            )}
          </div>
        </section>
      </>
    </>
  );
}
