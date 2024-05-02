import { useEffect, useState } from "react";
import LeftPart from "../components/leftPart";
import PreLoader from "../components/preLoader";
import RightPart from "../components/rightPart";
import { FloatButton, } from 'antd';

import { isMobile } from "react-device-detect";
import MobileMenu from "@/components/mobile/menu";


const Portfolio = () => {
    const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);
    const [activeAbout, setActiveAbout] = useState<boolean>(false);

    useEffect(() => {
        if (isMobile) {
            setHideLeftPart(true);
        }
    }, [isMobile]);

    return (
        < div className="arlo_tm_wrapper_all" >

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>

            {/* PRELOADER */}
            <PreLoader />
            {/* /PRELOADER */}

            {/* MOBILE MENU */}
            <MobileMenu activeAbout={activeAbout} setActiveAbout={setActiveAbout} />
            {/* /MOBILE MENU */}

            {/* CONTENT */}
            <div className="arlo_tm_content">

                {/* LEFTPART */}
                <LeftPart hideLeftPart={hideLeftPart} setHideLeftPart={setHideLeftPart}
                    activeAbout={activeAbout} setActiveAbout={setActiveAbout} />
                {/* /LEFTPART */}

                {/* RIGHTPART */}
                <RightPart hideLeftPart={hideLeftPart} setHideLeftPart={setHideLeftPart}
                    activeAbout={activeAbout} setActiveAbout={setActiveAbout}
                />
                {/* /RIGHTPART */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop
                    tooltip={<div>Back to Top</div>}
                />
            </div>
        </div >
    )
}

export default Portfolio;