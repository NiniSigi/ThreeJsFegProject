import { Suspense, useLayoutEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import PointerHtmlTest from "../models/PointerHtmlTest";
import { IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { Feg } from "../models/Feg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GoInFullModelView from "../components/goInFullModelView";
import gsap from "gsap";

const Home = () => {
  const controlsRef = useRef();
  const comp = useRef();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([5, 4, 3]);
  const [useCameraPosition, setUseCameraPosition] = useState(true);

  const handleExpand = () => {
    setIsFullScreen(!isFullScreen);
    setUseCameraPosition(!useCameraPosition);
    gsap.context(() => {
      const t1 = gsap.timeline();

      t1.to("#main-page", {
        autoAlpha: isFullScreen ? 1 : 0,
        width: isFullScreen ? "66%" : "0%",
        padding: isFullScreen ? "6rem" : "0",
        margin: isFullScreen ? "6" : "0",
        duration: 3,
        ease: "power2.inOut",
      }).to(
        "#canvas-container",
        {
          width: isFullScreen ? "33%" : "100%",
          height: isFullScreen ? "66%" : "100%",
          margin: isFullScreen ? "6rem" : "0",
          duration: 2.9,
        },
        "<"
      );
    }, comp);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#canvas-container", {
        height: "100%",
        width: "100%",
        margin: 0,
        duration: 3,
        delay: 3,
      })
        .from(
          "#main-page",
          2,
          {
            opacity: 0,
            display: "none",
            margin: 0,
            padding: 0,
            width: "0%",
            height: "-0%",
            duration: 3,
          },
          "<"
        )
        .from(
          "#go-in-full-model-view",
          {
            opacity: 0,
            yPercent: 10,
            duration: 3,
          },
          "-=2"
        );
      //setUseCameraPosition(false);
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={comp} className="relative">
      <div className="flex w-full h-screen items-center justify-between">
        <section
          id="main-page"
          className="flex h-screen w-2/3 opacity-100 p-6 m-6"
        >
          <p id="test">Test</p>
        </section>
        <section
          id="canvas-container"
          className="flex rounded-lg drop-shadow-lg bg-gray-300 w-1/3 opacity-100 h-2/3 mx-6"
        >
          <Canvas
            camera={{
              fov: 64,
              position: cameraPosition,
            }}
          >
            <Suspense fallback={<Loader />}>
              {isFullScreen && <OrbitControls ref={controlsRef} />}
              <ambientLight intensity={2} />
              <Feg
                isFullScreen={isFullScreen}
                cameraPosition={cameraPosition}
                useCameraPosition={useCameraPosition}
                setUseCameraPosition={setUseCameraPosition}
              />
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

          <GoInFullModelView
            id="go-in-full-model-view"
            text={isFullScreen ? "Close" : "Explore"}
            onClick={handleExpand}
          >
            {isFullScreen ? (
              <IoCloseSharp className="w-5 h-5" />
            ) : (
              <IoSearchSharp className="w-5 h-5" />
            )}
          </GoInFullModelView>
        </section>
      </div>
    </div>
  );
};

export default Home;
