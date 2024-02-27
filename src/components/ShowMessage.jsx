const ShowErrorMessage = ({ message, className }) => {
  return (
    <div className={`py-1 text-2xl text-center ${className}`}>{message}</div>
  );
};

export default ShowErrorMessage;
