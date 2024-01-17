const Results = ({ length }) => {
  return (
    <p className="num-results">
      {/* {movies.length} */}
      Found <strong>{length}</strong> results
    </p>
  );
};

export default Results;
