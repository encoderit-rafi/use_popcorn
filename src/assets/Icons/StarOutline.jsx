import PropTypes from "prop-types";

const StarOutline = ({
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
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"
        />
      </svg>
    </div>
  );
};
StarOutline.propTypes = {
  className: PropTypes.string,
  handelOnClickSetRating: PropTypes.func,
  handelOnMouseEnterSetTempRating: PropTypes.func,
  handelOnMouseLeaveSetTempRating: PropTypes.func,
};
export default StarOutline;
