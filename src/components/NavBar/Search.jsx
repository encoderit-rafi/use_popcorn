import { useEffect, useRef } from "react";
import { useKey } from "../hooks/useKey";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useKey("Enter", () => {
    if (document.activeElement == inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
  return (
    <input
      ref={inputEl}
      className="w-full search "
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
