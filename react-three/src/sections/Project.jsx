import { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import DemoPhone from "../components/DemoPhone";

const projectCount = myProjects.length;
const Project = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const myCurrentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prev) => {
            if (direction === "previous") {
                return prev === 0 ? projectCount - 1 : prev - 1;
            } else {
                return prev === projectCount - 1 ? 0 : prev + 1;
            }
        });
    };

    return (
        <section className="c-space my-20" id="work">
            <p className="head-text">Participated projects</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img
                            src={myCurrentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>
                    <div
                        className="p-3 blackdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                        style={myCurrentProject.logoStyle}
                    >
                        <img
                            src={myCurrentProject.logo}
                            alt="logo"
                            className="w-10 h-10 shadow-sm object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animateText">
                            {myCurrentProject.title}
                        </p>
                        <p className="animatedText">{myCurrentProject.desc}</p>
                        <p className="animatedText">{myCurrentProject.subdesc}</p>
                        <div className="flex items-center justify-between flex-wrap gap-5">
                            <div className="flex items-center gap-3 flex-wrap">
                                {myCurrentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo">
                                        <img src={tag.path} alt={tag.name} />
                                    </div>
                                ))}
                            </div>
                            {/* <a
                                href={myCurrentProject.href}
                                className="flex items-center gap-2 cursor-pointer text-white-600"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>Check Live Site</p>
                                <img
                                    src="assets/arrow-up.png"
                                    alt="arrow"
                                    className="w-3 h-3"
                                />
                            </a> */}
                        </div>

                        <div className="flex justify-between items-center mt-7">
                            <button
                                className="arrow-btn"
                                onClick={() => {
                                    handleNavigation("previous");
                                }}
                            >
                                <img src="assets/left-arrow.png" alt="left-arrow" />
                            </button>
                            <button
                                className="arrow-btn"
                                onClick={() => {
                                    handleNavigation("next");
                                }}
                            >
                                <img src="assets/right-arrow.png" alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    {myCurrentProject.isMobile ? (

                        <Canvas>
                            <ambientLight intensity={1} position={[10, 10, 5]} />
                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                    <group scale={2} position={[0, -0.1, 0]}>
                                        {/* <DemoComputer texture={myCurrentProject.texture} /> */}

                                        <DemoPhone texture={myCurrentProject.texture} />
                                    </group>
                                </Suspense>
                            </Center>
                            <OrbitControls enableZoom maxPolarAngle={Math.PI / 2} />
                        </Canvas>
                    ) : (
                        <Canvas>
                            <ambientLight intensity={10} position={[10, 10, 5]} />
                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                    <group scale={2} position={[0, -0.1, 0]}>
                                        <DemoComputer texture={myCurrentProject.texture} />


                                    </group>
                                </Suspense>
                            </Center>
                            <OrbitControls enableZoom maxPolarAngle={Math.PI / 2} />
                        </Canvas>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Project;
