import { useState } from "react";
const Box = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ul
      className={`bg-[#2b3035] rounded-xl relative flex-1 p-5 overflow-auto ${className}`}
    >
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </ul>
  );
};

export default Box;
