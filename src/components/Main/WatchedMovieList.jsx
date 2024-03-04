import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watched, removeMovie }) => {
  return (
    <>
      <ul className="list">
        {watched?.map((movie) => (
          <WatchedMovie
            key={movie.imdbID}
            movie={movie}
            removeMovie={(v) => {
              removeMovie(v);
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default WatchedMovieList;
