import { TypeAnimation } from "react-type-animation";
import myImg from '@/assets/img/hero/alice.jpeg';

const HomeCV = () => {
    const handleScrollToAbout = () => {
        const section = document.querySelector('#about');
        if (section) {
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }

    return (
        <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header_wrap">
                <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                        <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                        <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                        <div className="inner_content">
                            <div className="image_wrap">
                                <img src={myImg} alt="hero" />
                            </div>
                            <div className="name_holder">
                                <h3>Oanh<span> Vu</span></h3>
                            </div>
                            <div className="text_typing">
                                <p>I'm a
                                    &nbsp;
                                    {/* <span className="arlo_tm_animation_text_word"></span> */}
                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'Web Developer',
                                            1500, // wait 1s before replacing "Web Developer" with "two"
                                            // 'Freelancer',
                                            // 1500,
                                            () => {
                                                console.log('sequence completed');
                                            }
                                        ]}
                                        //wrapper="span"
                                        cursor={false}
                                        repeat={Infinity}
                                        speed={30}
                                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                        style={{ color: '#8cc07d' }}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                        <span onClick={(e) => handleScrollToAbout()}>
                            <i className="xcon-angle-double-down"></i>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCV;