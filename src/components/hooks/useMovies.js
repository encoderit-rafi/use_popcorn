import { useEffect, useState } from "react";
const KEY = "e7cf6685";

export function useMovies(query, setSelectedMovieID) {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  // const [selectedMovieID, setSelectedMovieID] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMovies() {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: abortController.signal }
        );
        const { Search: movies } = await res.json();
        setSelectedMovieID(null);
        setMovies(movies);
      } catch (error) {
        if (error.name !== "AbortError") {
          setIsError(true);
          setMessage(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
    return function () {
      abortController.abort();
    };
  }, [query, setSelectedMovieID]);
  return { movies, isError, isLoading, message, setIsError };
}
