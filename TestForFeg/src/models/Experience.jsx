import React from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Tokio } from "./Tokio";
import Pointer from "./Pointer";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Tokio />
      </ScrollControls>
      <Pointer position={[20, 20, 0]} />
    </>
  );
};

export default Experience;
