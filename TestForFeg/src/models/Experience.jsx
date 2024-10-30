import React from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Tokio } from "./Tokio";
import Pointer from "./Pointer";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Pointer position={[4, 0, 0]} />
      <Pointer position={[1, 0, 5]} />
      <Tokio />
    </>
  );
};

export default Experience;
