import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <ul className="overflow-y-auto">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
