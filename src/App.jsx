import { useEffect, useState } from "react";
import Box from "./components/Box";
import NavBar from "./components/NavBar/NavBar";
import Results from "./components/NavBar/Results";
import Main from "./components/Main/Main";
import MovieList from "./components/Main/MovieList";
import WatchedMovieList from "./components/Main/WatchedMovieList";
import WatchedMovieSummery from "./components/Main/WatchedMovieSummery";
import ShowErrorMessage from "./components/ShowMessage";
import Movie from "./components/Main/Movie";
import Search from "./components/NavBar/Search";
import Logo from "./components/NavBar/Logo";
import MovieDetails from "./components/Main/MovieDetails";
// import TextExpander from "./components/TextExpander";
// import StarRating from "./components/StarRating";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const KEY = "e7cf6685";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        const { Search: movies } = await res.json();
        setMovies(movies);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [query]);
  // const defaultRating = 5;
  // const [movieRating, setMovieRating] = useState(defaultRating);
  // const handelOnClickSetMovieRating = (v) => {
  //   setMovieRating(v);
  // };
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
              // <p>{selectedMovieID}</p>
              <MovieDetails selectedMovieID={selectedMovieID} />
            ) : (
              <>
                <WatchedMovieSummery watched={watched} />

                <WatchedMovieList watched={watched} />
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
      {/* <p className="mb-10 text-4xl text-center">
        this movie has {movieRating} star rating
      </p>
      <StarRating
        defaultRating={defaultRating}
        maxRating={5}
        iconClass="cursor-pointer text-orange-500"
        textClass="hidden"
        messages={["😒", "😐", "🙂", "😊", "😍"]}
        handelOnClickSetMovieRating={handelOnClickSetMovieRating}
      /> */}
      {/* <TextExpander
        className="p-4 font-mono text-4xl border "
        expandClassName="bg-neutral-300  text-neutral-900"
        maxTextLength={50}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        voluptate omnis sapiente placeat commodi? Culpa deserunt nulla eius
        dolores incidunt nam unde voluptas ducimus, cum optio recusandae, omnis
        repellat sint ipsam iusto! Ipsam tempore doloribus quisquam repellendus
        quos deserunt iure quis architecto non dicta modi, asperiores dolorum
        fugiat minima in.
      </TextExpander> */}
    </>
  );
}
