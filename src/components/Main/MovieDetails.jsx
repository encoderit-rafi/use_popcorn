import { useState, useEffect } from "react";
import StarRating from "../StarRating";
const KEY = "e7cf6685";

const MovieDetails = ({ selectedMovieID, setIsError, setMessage }) => {
  const [movie, setMovie] = useState({});
  const {
    Actors: actors,
    Director: director,
    Genre: genre,
    Plot: plot,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Title: title,
    Year,
    imdbRating,
  } = movie;
  const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true);
      // setIsError(false);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieID}`
        );
        const movie = await res.json();
        console.log("🚀 ~ fetchMovie ~ movie:", movie);
        setMovie(movie);
      } catch (error) {
        // setIsError(true);
        // setMessage(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [selectedMovieID, setIsLoading, setIsError, setMessage]);
  return (
    <div className="h-full text-5xl ">
      {isLoading ? (
        <p className="loader"> Loading...</p>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex w-full">
            <img
              src={poster}
              alt={`poster of ${title}`}
              className="object-cover object-center w-1/3"
            />
            <div className="p-8">
              <h2 className="text-4xl font-semibold ">{title}</h2>
              <div className="space-y-2 mt-7">
                <p className="space-x-2 text-lg">
                  <span>{released}</span>
                  <span>&bull;</span>
                  <span>{runtime}</span>
                </p>
                <p className="text-lg">{genre}</p>
                <p className="flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.125rem"
                      height="1.125rem"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#fdd835"
                        d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                      />
                      <path
                        fill="#ffff8d"
                        d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                      />
                      <path
                        fill="#f4b400"
                        d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                      />
                    </svg>
                  </span>
                  <span className="text-lg">{imdbRating} IMDb rating</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-10 space-y-5 text-xl ">
            <StarRating
              maxRating={10}
              className="items-center py-5 rounded-xl bg-custom_background_100"
              iconClass="w-7"
              textClass="!text-orange-400 text-xl"
            />
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring - {actors}</p>
            <p>Directed by - {director}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
