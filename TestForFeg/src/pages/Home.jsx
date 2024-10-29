import React from "react";
import Experience from "../models/Experience";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        camera={{
          fov: 64,
          position: [0, 0, 5],
        }}
      >
        <Experience />
      </Canvas>
    </section>
  );
};

export default Home;
