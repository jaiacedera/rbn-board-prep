import { useEffect, useState } from "react";
export function useHashRoute() {
  const [page, setPage] = useState(() => location.hash.slice(1) || "home");
  useEffect(() => {
    const update = () => {
      setPage(location.hash.slice(1) || "home");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return page;
}
