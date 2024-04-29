import { useState } from "react";
import LeftPart from "../components/leftPart";
import PreLoader from "../components/preLoader";
import RightPart from "../components/rightPart";
import { FloatButton } from 'antd';

const Portfolio = () => {
    const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);
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
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap">
                    <div className="logo">
                        <a href="index.html"><img src="img/logo/mobile_logo.png" alt="mobile_logo" /></a>
                    </div>
                    <div className="arlo_tm_trigger">
                        <div className="hamburger hamburger--collapse-r">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap">
                    <div className="mob_menu">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /MOBILE MENU */}

            {/* CONTENT */}
            <div className="arlo_tm_content">

                {/* LEFTPART */}
                <LeftPart hideLeftPart={hideLeftPart} setHideLeftPart={setHideLeftPart} />
                {/* /LEFTPART */}

                {/* RIGHTPART */}
                <RightPart hideLeftPart={hideLeftPart} setHideLeftPart={setHideLeftPart} />
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