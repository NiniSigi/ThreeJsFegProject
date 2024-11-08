import { useRef, useState } from "react";

const GoInFullModelView = ({ children, text, onClick, ...props }) => {
  const refButton = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-pulse">
      <button
        className="flex items-center justify-center h-16 w-16 p-3 border-2 border-opacity-100 bg-blue-500 border-blue-500 rounded-full text-white hover:bg-opacity-80"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        {...props}
      >
        <div className="flex justify-center items-center">{children}</div>
      </button>
    </div>
  );
};

export default GoInFullModelView;
