import Star from "../assets/Icons/Star.jsx";
import StarOutline from "../assets/Icons/StarOutline.jsx";
const StarRating = ({ maxRating = 5 }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* <Star /> */}
      {/* <StarOutline /> */}
      {Array.from({ length: maxRating }, (_, i) => (
        <StarOutline key={i} />
      ))}
    </div>
  );
};

export default StarRating;
