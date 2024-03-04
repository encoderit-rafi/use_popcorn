const WatchedMovie = ({
  movie: { Poster, Title, imdbRating, userRating, Runtime, imdbID },
  removeMovie,
}) => {
  return (
    <li className="hover:bg-custom_background_100 group ">
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
      <button
        onClick={() => {
          removeMovie(imdbID);
        }}
        className="absolute hidden -translate-y-1/2 right-5 hover:text-red-600 top-1/2 group-hover:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
          />
        </svg>
      </button>
    </li>
  );
};

export default WatchedMovie;
