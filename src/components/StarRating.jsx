import { useState } from "react";
import Star from "../assets/Icons/Star.jsx";
import StarOutline from "../assets/Icons/StarOutline.jsx";
const StarRating = ({
  maxRating = 5,
  iconClass = "",
  textClass = "",
  defaultRating = 0,
}) => {
  const [rating, setRating] = useState(
    defaultRating <= maxRating ? defaultRating : 0
  );
  const [isHover, setIsHover] = useState(false);
  const [tempRating, setTempRating] = useState(0);
  let data = isHover ? tempRating : rating;

  const handelOnClickSetRating = (value) => {
    setRating((v) => (v === value ? --value : value));
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-8">
        <div
          className="flex items-center justify-center space-x-4 "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {Array.from({ length: maxRating }, (_, i) =>
            data > i ? (
              <Star
                className={iconClass}
                key={i}
                handelOnClickSetRating={() => handelOnClickSetRating(i + 1)}
                handelOnMouseEnterSetTempRating={() => setTempRating(i + 1)}
                handelOnMouseOutSetTempRating={() => setTempRating(i - 1)}
              />
            ) : (
              <StarOutline
                className={iconClass}
                key={i}
                handelOnClickSetRating={() => handelOnClickSetRating(i + 1)}
                handelOnMouseEnterSetTempRating={() => setTempRating(i + 1)}
                handelOnMouseLeaveSetTempRating={() => setTempRating(i - 1)}
              />
            )
          )}
        </div>
        <span className={`text-5xl font-medium text-white ${textClass}`}>
          {data || ""}
        </span>
      </div>
    </>
  );
};

export default StarRating;
