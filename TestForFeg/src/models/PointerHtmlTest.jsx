import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useState } from "react";

const PointerHtmlButton = ({
  children,
  text,
  lookAtPosition,
  setOrbitControlsTarget,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const tl = useRef();
  const refButton = useRef();
  const { camera } = useThree();

  const goToPointer = () => {
    tl.current = gsap.timeline();
    tl.current.to(camera.position, {
      x: props.position[0],
      y: props.position[1],
      z: props.position[2],
      duration: 2,
      ease: "power3.inOut",
      onUpdate: () => {
        // Update OrbitControls target
        if (setOrbitControlsTarget.current) {
          setOrbitControlsTarget.current.target.set(...lookAtPosition);
          setOrbitControlsTarget.current.update();
        }
      },
    });
  };

  return (
    <Html {...props} ref={meshRef}>
      <div className="flex justify-center items-center">
        <button
          className="flex items-center justify-center p-2 border-2 border-opacity-100 bg-blue-500 border-blue-500 border-t-blue-500 rounded-full text-white transition-all duration-300 hover:bg-opacity-80"
          onClick={goToPointer}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: hovered ? refButton.current?.offsetWidth + 40 || 60 : 40,
          }}
          {...props}
        >
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
              className="px-2 text-sm text-white whitespace-nowrap"
            >
              {text}
            </span>
          </div>
        </button>
      </div>
    </Html>
  );
};

export default PointerHtmlButton;
