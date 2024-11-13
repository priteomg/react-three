import React from 'react'

const Interest = () => {
    return (
        <div>
            <section className="c-space" id="work">
                <p className="head-text mb-10">Interests & Hobby</p>
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
                </div>
            </section>
        </div>
    )
}

export default Interest