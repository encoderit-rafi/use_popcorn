import { useEffect, useState } from "react";
const Box = ({ children, className, selectedMovieID, onClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    function callback(e) {
      if (e.key === "Escape") {
        onClick();
        console.log("🚀 ~ callback ~ Escape:");
      }
    }
    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [onClick]);
  return (
    <ul
      className={`bg-[#2b3035] rounded-xl relative flex-1 p-5 overflow-auto ${className}`}
    >
      {selectedMovieID && (
        <button
          className="absolute p-3 bg-white rounded-full text-custom_background_500 top-3 left-3"
          onClick={() => onClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M3.636 11.293a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414L6.757 13H20a1 1 0 1 0 0-2H6.757l3.95-3.95a1 1 0 0 0-1.414-1.414z"
              />
            </g>
          </svg>
        </button>
      )}
      <button
        className="absolute z-10 flex items-center justify-center p-3 text-white rounded-full bg-custom_background_100 top-3 right-3"
        onClick={() => {
          console.log("click");
          setIsOpen((open) => !open);
        }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"
            />
          </svg>
        )}
      </button>
      {isOpen && children}
    </ul>
  );
};

export default Box;
