import React from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Tokio } from "./Tokio";
import Pointer from "./Pointer";
import { Feg } from "./Feg";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Pointer position={[4, 0, 0]} />
      <Pointer position={[1, 0, 5]} />
      <Feg />
    </>
  );
};

export default Experience;
