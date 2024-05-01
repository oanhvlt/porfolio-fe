import { useState } from "react";
import About from "./content/about";
import Contact from "./content/contact";
import HomeCV from "./content/homeCV";
import Projects from "./content/projects";
import Skills from "./content/skills";

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (v: boolean) => void;
    activeAbout: boolean;
    setActiveAbout: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
    const { hideLeftPart, activeAbout, setActiveAbout } = props;
    return (
        <div className={hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
            <div className="rightpart_inner">
                <HomeCV setActiveAbout={setActiveAbout} />

                {/* ABOUT */}
                <About />
                {/* /ABOUT */}

                {/* SKILLS */}
                <Skills />
                {/* /SKILLS */}

                {/* PROJECTS */}
                <Projects />
                {/* /PROJECTS */}

                {/* <!-- CONTACT & FOOTER --> */}
                <Contact />
                {/* <!-- /CONTACT & FOOTER --> */}

            </div>
        </div>
    )
}

export default RightPart;