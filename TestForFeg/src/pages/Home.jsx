import React, { Suspense, useRef, useState } from "react";
import Loader from "../components/Loader";
import PointerHtmlTest from "../models/PointerHtmlTest";
import { IoSearchSharp } from "react-icons/io5";
import { Feg } from "../models/Feg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GoInFullModelView from "../components/goInFullModelView";

const Home = () => {
  const controlsRef = useRef();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleExpand = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Section */}
      <section
        className={`w-1/2 h-full flex items-center justify-center bg-gray-100 {
          isFullScreen
            ? "fixed top-0 left-0 w-full opacity-0 transform translate-x-0"
            : "w-1/2 opacity-100"
        }`}
      >
        <p>Test</p>
      </section>

      {/* Right Section with Expandable Animation */}
      <section
        className={`relative h-full transition-all duration-700 ease-in-outbg-gray-300 ${
          isFullScreen
            ? "flex w-full h-screen opacity-100"
            : "w-1/2 opacity-100"
        }`}
      >
        <Canvas
          camera={{
            fov: 64,
            position: [0, 2, 8],
          }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls ref={controlsRef} />
            <ambientLight intensity={1} />
            <Feg />

            {/* Fade-In Effect for PointerHtmlTest Components */}
            {isFullScreen && (
              <>
                <PointerHtmlTest
                  text="Gottesdienst Saal"
                  position={[0.13, 0.22, -0.04]}
                  lookAtPosition={[-0.96, 0.38, 1.14]}
                  setOrbitControlsTarget={controlsRef}
                >
                  <IoSearchSharp />
                </PointerHtmlTest>

                <PointerHtmlTest
                  text="Eingang"
                  position={[-0.3, 0.05, -0.68]}
                  lookAtPosition={[0.1, 0.08, -0.68]}
                  setOrbitControlsTarget={controlsRef}
                >
                  <IoSearchSharp />
                </PointerHtmlTest>

                <PointerHtmlTest
                  text="Merzweksall"
                  position={[0.46, 0.21, -0.54]}
                  lookAtPosition={[1.18, 0.2, -0.48]}
                  setOrbitControlsTarget={controlsRef}
                >
                  <IoSearchSharp />
                </PointerHtmlTest>
              </>
            )}
          </Suspense>
        </Canvas>

        {/* Expand Button */}
        <GoInFullModelView text="Explore" onClick={handleExpand}>
          <IoSearchSharp className="w-5 h-5" />
        </GoInFullModelView>
      </section>
    </div>
  );
};

export default Home;
