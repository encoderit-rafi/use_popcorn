import PropTypes from "prop-types";
const Star = ({
  className = "",
  handelOnClickSetRating = () => {},
  handelOnMouseEnterSetTempRating = () => {},
  handelOnMouseLeaveSetTempRating = () => {},
}) => {
  return (
    <div
      className={`w-24 text-orange-400 ${className}`}
      onClick={handelOnClickSetRating}
      onMouseEnter={handelOnMouseEnterSetTempRating}
      onMouseLeave={handelOnMouseLeaveSetTempRating}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
        />
      </svg>
    </div>
  );
};
Star.propTypes = {
  className: PropTypes.string,
  handelOnClickSetRating: PropTypes.func,
  handelOnMouseEnterSetTempRating: PropTypes.func,
  handelOnMouseLeaveSetTempRating: PropTypes.func,
};
export default Star;
