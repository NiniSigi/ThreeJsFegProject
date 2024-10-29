import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useState } from "react";

const Pointer = (...props) => {
  const meshRef = useRef();
  const tl = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const camera = useThree();

  const goToPointer = (e) => {
    console.log(e);
    tl.current = gsap.timeline();
    tl.current.go(camera.position, {
      y: e.position.y,
    });
  };
  return (
    <mesh
      {...props}
      ref={meshRef}
      onClick={(event) => goToPointer(event)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[0.09, 0.09, 0.09]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Pointer;
