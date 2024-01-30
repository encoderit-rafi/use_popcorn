const Results = ({ length }) => {
  return (
    <p className="text-3xl">
      {/* {movies.length} */}
      Found <strong>{length}</strong> results
    </p>
  );
};

export default Results;
