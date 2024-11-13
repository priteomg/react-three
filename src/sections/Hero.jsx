import { Canvas } from "@react-three/fiber";

import Hackerroom from "../components/Hackerroom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";

import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

function Hero() {


    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id='home'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Prite <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Product & Brands</p>

                <div className="w-full h-full  absolute inset-0">
                    {/* <Leva /> */}
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                            <HeroCamera isMobile={isMobile}>
                                <Hackerroom
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0, -3.1, 0]}
                                />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                    <div className="absolute bottom-5 left-0 right-0 w-full z-1 c-space">
                        <a href="#about" className="w-fit">
                            <Button
                                containerClass="sm:w-fit w-full sm:min-w-96 "
                                isBeam
                                name="Let's work together"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
