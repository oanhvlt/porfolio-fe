import myImg from '@/assets/img/about/img.jpeg';
import myFrame from '@/assets/img/about/550x640.jpg';
import myCV from '@/assets/CV.pdf';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';


const About = () => {

    const sceneEl = useRef(null);

    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true
            })

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, []);

    return (
        <div className="arlo_tm_section relative" id="about" style={{ paddingTop: '100px' }}>
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.2">
                                        <img src={myFrame} alt="550x640" />
                                        <div className="inner" data-img-url={myImg}
                                            style={{ backgroundImage: `url(${myImg})` }}
                                        ></div>
                                    </div>
                                    <div className="border layer" data-depth="0.6">
                                        <img src={myFrame} alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Hello, I'm
                                        &nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Vu Le Thuy Oanh and ',
                                                1500,
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            repeat={Infinity}
                                            speed={15}
                                            placeholder={undefined} onPointerEnterCapture={false} onPointerLeaveCapture={false}
                                            style={{ color: '#509966' }}
                                        />
                                    </h4>
                                </div>
                                <div className="definition">
                                    <p>I am a web developer specializing in React.js and Node.js technologies.
                                        <br></br>I have a strong background in building modern and responsive web applications using these frameworks.
                                        I am proficient in front-end development with React.js, creating interactive user interfaces and components and user-friendly websites.
                                        <br></br>In addition, I have experience in back-end development with Node.js, building scalable and efficient server-side applications.
                                        <br></br>I am dedicated to delivering high-quality and performance-driven solutions for my clients.
                                        Please explore my projects to see examples of my work.
                                        <br></br>Thank you for stopping by!</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span><label>Birthday:</label> 24.10.1988</span>
                                        </li>
                                        <li>
                                            <span><label>Gender:</label> Female</span>
                                        </li>
                                        <li>
                                            <span><label>City:</label> TP.HCM, Vietnam</span>
                                        </li>
                                        <li>
                                            <span><label>Interests:</label> Yoga, Travelling</span>
                                        </li>
                                        <li>
                                            <span><label>Study:</label> Ton Duc Thang University</span>
                                        </li>
                                        <li>
                                            <span><label>Degree:</label> Bachelor of Information Technology</span>
                                        </li>

                                        {/* <li>
                                            <span><label>Mail:</label> <a href="mailto:vulethuyoanh@gmail.com">vulethuyoanh&#64;gmail.com</a></span>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href={myCV} download><span>Download CV</span></a>
                                        </li>
                                        {/* <li className="anchor">
                                            <a href="#contact"><span>Send Message</span></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;