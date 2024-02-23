import { useEffect, useState } from "react";
import Box from "./components/Box";
import NavBar from "./components/NavBar/NavBar";
import Results from "./components/NavBar/Results";
import Main from "./components/Main/Main";
import MovieList from "./components/Main/MovieList";
import WatchedMovieList from "./components/Main/WatchedMovieList";
import WatchedMovieSummery from "./components/Main/WatchedMovieSummery";
import ShowErrorMessage from "./components/ShowErrorMessage";
import Movie from "./components/Main/Movie";
// import TextExpander from "./components/TextExpander";
// import StarRating from "./components/StarRating";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
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
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMovies() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=spiderman`
      );
      const { Search: movies } = await res.json();
      console.log("🚀 ~ fetchMovies ~ movies:", movies);
      setMovies(movies);
    } catch (error) {
      console.error("🚀 ~ fetchMovies ~ error:", error.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  // const defaultRating = 5;
  // const [movieRating, setMovieRating] = useState(defaultRating);
  // const handelOnClickSetMovieRating = (v) => {
  //   setMovieRating(v);
  // };
  return (
    <>
      <div className="flex flex-col h-screen gap-5 p-5">
        <NavBar>
          <Results length={movies.length} />
        </NavBar>

        <Main>
          {/* <ShowErrorMessage /> */}
          <Box>
            {isLoading ? (
              <p className="loader"> Loading...</p>
            ) : (
              <>
                {movies?.map((movie) => (
                  <Movie key={movie.imdbID} movie={movie} />
                ))}
              </>
            )}
          </Box>
          <Box>
            <>
              <WatchedMovieSummery watched={watched} />

              <WatchedMovieList watched={watched} />
            </>
          </Box>
        </Main>
        {/* </div> */}
        {/* <NavBar>
          <Results length={movies.length} />
        </NavBar> */}
        {/* <Main>
          <ShowErrorMessage />
          <Box>
            {isLoading ? (
              <p className="loader"> Loading...</p>
            ) : (
              <MovieList movies={movies} />
            )}
          </Box>
          <Box>
            <>
              <WatchedMovieSummery watched={watched} />

              <WatchedMovieList watched={watched} />
            </>
          </Box>
        </Main> */}
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
