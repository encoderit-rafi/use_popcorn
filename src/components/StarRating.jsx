import Star from "./Icons/Star";
import StarOutline from "./Icons/StarOutline";
const StarRating = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Star />
      <StarOutline />
    </div>
  );
};

export default StarRating;
