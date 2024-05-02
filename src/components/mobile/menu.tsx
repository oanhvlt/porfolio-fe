import { IoIosMenu } from "react-icons/io";
import mobileLogo from '@/assets/img/logo/mobile_logo.png';
import { useEffect, useState } from 'react';

interface IProps {
    activeAbout: boolean;
    setActiveAbout: (value: boolean) => void;
}

const MobileMenu = (props: IProps) => {
    const { activeAbout, setActiveAbout } = props;
    const [activeTab, setActiveTab] = useState<string>('home');
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        overflow: "hidden",
        display: isOpen ? 'block' : 'none',
        transition: "2s"
    };

    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const tab = hash.replace('#', '');
            setActiveTab(tab);
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        if (activeAbout) {
            setActiveTab('about');
            setActiveAbout(false);
        }

    }, [activeTab, activeAbout])

    //:React.MouseEvent<HTMLAnchorElement, MouseEvent>
    const handleClickTab = (tab: string, e: any) => {
        //e.preventDefault();
        setActiveTab(tab);
        const section = document.querySelector(`#${tab}`);
        if (section) {
            window.location.hash = tab;
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(prev => !prev);
        }
    }

    return (
        <div className="arlo_tm_mobile_header_wrap">
            <div className="main_wrap">
                {/* <div className="logo">
                    <a href="#"><img src={mobileLogo} alt="mobile_logo" /></a>
                </div> */}
                <div className="arlo_tm_trigger">
                    <div className={isOpen ? "hamburger hamburger--collapse-r is-active"
                        : "hamburger hamburger--collapse-r"}
                    >
                        <div className="hamburger-box">
                            <div className="hamburger-inner"
                                onClick={() => {
                                    setIsOpen(prev => !prev)
                                }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arlo_tm_mobile_menu_wrap" style={style}>
                <div className="mob_menu">
                    <ul className="anchor_nav">
                        <li><a href="#home"
                            className={activeTab === 'home' ? 'active' : ''}
                            onClick={(e) => handleClickTab('home', e)}>
                            Home
                        </a></li>
                        <li><a href="#about" className={activeTab === 'about' ? 'active' : ''}
                            onClick={(e) => handleClickTab('about', e)}>
                            About
                        </a></li>
                        <li><a href="#skills" className={activeTab === 'skills' ? 'active' : ''}
                            onClick={(e) => handleClickTab('skills', e)}>
                            Skills
                        </a></li>
                        <li><a href="#projects" className={activeTab === 'projects' ? 'active' : ''}
                            onClick={(e) => handleClickTab('projects', e)}>
                            Projects
                        </a></li>
                        <li><a href="#contact" className={activeTab === 'contact' ? 'active' : ''}
                            onClick={(e) => handleClickTab('contact', e)}>
                            Contact
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;