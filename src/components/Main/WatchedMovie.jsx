const WatchedMovie = ({
  movie: { Poster, Title, imdbRating, userRating, Runtime },
}) => {
  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Runtime} min</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedMovie;
