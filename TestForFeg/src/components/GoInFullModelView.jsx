import { useRef, useState } from "react";

const GoInFullModelView = ({ children, text, onClick, ...props }) => {
  const refButton = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className="flex items-center justify-center h-16 w-16 p-3 border-2 border-opacity-100 bg-blue-500 border-blue-500 rounded-full text-white transition-all duration-300 hover:bg-opacity-80"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{
          width: hovered ? refButton.current?.offsetWidth + 50 || 80 : 64,
          height: hovered ? 64 : 64,
        }}
        {...props}
      >
        <div className="flex justify-center items-center">
          {children}
          <div
            style={{
              width: hovered ? refButton.current?.offsetWidth || 0 : 0,
              opacity: hovered ? 1 : 0,
            }}
            className="overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            <span
              ref={refButton}
              className="px-3 text-md text-white whitespace-nowrap"
            >
              {text}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default GoInFullModelView;
