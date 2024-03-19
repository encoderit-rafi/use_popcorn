import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    function callback(e) {
      if (document.activeElement == inputEl.current) return;
      if (e.key === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);
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
