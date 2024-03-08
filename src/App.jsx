import { useEffect, useState } from "react";
import Box from "./components/Box";
import NavBar from "./components/NavBar/NavBar";
import Results from "./components/NavBar/Results";
import Main from "./components/Main/Main";
import WatchedMovieList from "./components/Main/WatchedMovieList";
import WatchedMovieSummery from "./components/Main/WatchedMovieSummery";
import ShowErrorMessage from "./components/ShowMessage";
import Movie from "./components/Main/Movie";
import Search from "./components/NavBar/Search";
import Logo from "./components/NavBar/Logo";
import MovieDetails from "./components/Main/MovieDetails";

const KEY = "e7cf6685";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  function handelRemoveMovie(id) {
    console.log("handelRemoveMovie::remove::id::", id);

    setWatched((movies) => {
      return movies.filter((movie) => movie.imdbID != id);
    });
  }
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
  }, [query]);

  return (
    <>
      <div className="flex flex-col h-screen gap-5 p-5">
        <NavBar>
          <Logo />
          <Search query={query} setQuery={setQuery} />
          <Results length={movies?.length} />
        </NavBar>

        <Main>
          <Box>
            {isLoading ? (
              <p className="loader"> Loading...</p>
            ) : (
              <>
                {movies?.map((movie) => (
                  <Movie
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() => setSelectedMovieID(movie.imdbID)}
                  />
                ))}
              </>
            )}
          </Box>
          <Box
            selectedMovieID={selectedMovieID}
            setIsError={(e) => setIsError(e)}
            setMessage={(error) => setIsError(error.message)}
            onClick={() => setSelectedMovieID(null)}
          >
            {selectedMovieID ? (
              <MovieDetails
                selectedMovieID={selectedMovieID}
                setSelectedMovieID={() => setSelectedMovieID(null)}
                watched={watched}
                setWatched={(v) => setWatched((movies) => [v, ...movies])}
              />
            ) : (
              <>
                <WatchedMovieSummery watched={watched} />

                <WatchedMovieList
                  watched={watched}
                  removeMovie={(v) => {
                    handelRemoveMovie(v);
                  }}
                />
              </>
            )}
          </Box>
        </Main>
        {isError && (
          <ShowErrorMessage
            message={message}
            className="font-medium bg-red-600 rounded-md"
          />
        )}
      </div>
    </>
  );
}
