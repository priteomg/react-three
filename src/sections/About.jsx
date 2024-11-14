import { useState } from "react";

import { techExpience } from "../constants";
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("phariwud.p@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid1.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit"
                        />
                        <div>
                            <p className="grid-headtext">Hi, I'm Phariwud Paprakob (Prite)</p>
                            <p className="grid-subtext">
                                With 3 years of experience, I have a honed my skills in frontend
                                and backend development, mainly focus on React and Node.js.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specially in JavaScript/TypeScript with a focus on React and
                                Next.js ecosystems.

                            </p>
                            <br />
                            <p className="grid-subtext">
                                I also looking for learning new things new tech like Vue.js, Flutter, etc.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full xl:h-[326px] h-fit flex flex-col">
                            <p className="grid-headtext">Tech Stack Experienced</p>
                            <div className="flex gap-8  mt-6 flex-col items-start">
                                {techExpience.map((item) => (
                                    <div className="w-full flex flex-col gap-2" key={item.id}>
                                        <div className="flex items-center gap-2">
                                            <img src={item.img} alt="logo" className="tech-logo object-contain" />{" "}
                                            <p className="text-white-700 font-bold">{item.name}</p>
                                        </div>

                                        <div className="relative w-full">
                                            <div className="h-6  w-full rounded-md border border-gray-500"></div>
                                            <div
                                                className={`absolute top-0 h-6 bg-green-400 rounded-md`}
                                                style={{ width: `${item.percent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}


                            </div>

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            className="w-full sm:h-[266px] h-fit object-contain"
                            src="/assets/grid3.png"
                            alt="grid-3"
                        />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and creating beautiful things through
                                code. Coding isn't just my profession, it is my passion.

                            </p>
                            <br />

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid4"
                            className="w-full md:h-[224px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    phariwud.p@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
