import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useState } from "react";

const Pointer = (props) => {
  const meshRef = useRef();
  const tl = useRef();
  const [hovered, setHover] = useState(false);
  const { camera } = useThree();

  useFrame(() => {
    meshRef.current.lookAt(camera.position);
  }, []);
  const goToPointer = () => {
    tl.current = gsap.timeline();
    tl.current.to(camera.position, {
      x: props.position[0],
      y: props.position[1],
      z: props.position[2],
      duration: 2,
      onUpdate: () => {
        camera.lookAt(meshRef.current.position);
      },
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
      <circleGeometry args={[0.09]} />
      <meshStandardMaterial
        color={hovered ? "red" : "lightgray"}
        depthTest={false}
      />
    </mesh>
  );
};

export default Pointer;
