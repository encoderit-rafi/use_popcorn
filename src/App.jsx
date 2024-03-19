import { useState } from "react";
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
import { useMovies } from "./components/hooks/useMovies";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
export default function App() {
  const [query, setQuery] = useState("");
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  function handelRemoveMovie(id) {
    setWatched((movies) => {
      return movies.filter((movie) => movie.imdbID != id);
    });
  }
      try {
  const { movies, isError, isLoading, message, setIsError } = useMovies(
    query,
    setSelectedMovieID
  );
  const [watched, setWatched] = useLocalStorage([], "watched");

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
