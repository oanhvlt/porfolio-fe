import About from "./content/about";
import Contact from "./content/contact";
import HomeCV from "./content/homeCV";
import Projects from "./content/projects";
import Skills from "./content/skills";

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (v: boolean) => void;
}

const RightPart = (props: IProps) => {
    return (
        <div className={props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
            <div className="rightpart_inner">
                <HomeCV />

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