import { TypeAnimation } from "react-type-animation";


const HomeCV = () => {
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
                                <img src="img/hero/alice.jpeg" alt="hero" />
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
                                        cursor={true}
                                        repeat={Infinity}
                                        speed={45}
                                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                    // style={{ fontSize: '20px', display: 'inline-block' }}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                        <a href="#about"><i className="xcon-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCV;