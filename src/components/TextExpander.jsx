import { useState } from "react";
import PropTypes from "prop-types";

const TextExpander = ({
  children,
  expanded = false,
  maxTextLength = 50,
  className = "",
  expandClassName = "",
  buttonClass = "",
  expandButtonClass = "",
  childrenClass = "",
  expendedChildrenClass = "",
  collapseText = "Show less",
  expandText = "Show more",
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  return (
    <div className={`${className} ${isExpanded ? expandClassName : ""}`}>
      <span
        className={`${childrenClass} ${
          isExpanded ? expendedChildrenClass : ""
        }`}
      >
        {children.length > maxTextLength && !isExpanded
          ? `${children.slice(0, maxTextLength)}...`
          : children}
      </span>
      {children.length > maxTextLength ? (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${buttonClass} ${isExpanded ? expandButtonClass : ""}`}
        >
          {isExpanded ? collapseText : expandText}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
TextExpander.propTypes = {
  children: PropTypes.string,
  maxTextLength: PropTypes.number,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  buttonClass: PropTypes.string,
  childrenClass: PropTypes.string,
  expandButtonClass: PropTypes.string,
  collapseText: PropTypes.string,
  expandText: PropTypes.string,
  expendedChildrenClass: PropTypes.string,
  expandClassName: PropTypes.string,
};
export default TextExpander;
