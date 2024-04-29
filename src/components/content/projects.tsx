import { Button, Modal } from "antd";
import { useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { AiFillFacebook } from 'react-icons/ai';


interface IProject {
    image: string;
    title: string;
    shortDescription: string;
    details: {
        description: string;
        frontend: string;
        backend: string;
        members: number,
        role: string;
        //implementTasks
        demo: string;
    }
};
const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);
    const dataProjects: IProject[] = [
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Web1",
            shortDescription: "shortDescription Web1",
            details: {
                description: "Web thương mại dien tu",
                frontend: "Reactjs",
                backend: "nodejs",
                members: 1,
                role: "Front-end developer",
                demo: "https://www.google.com.vn/",
            }
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Web2",
            shortDescription: "shortDescription Web2",
            details: {
                description: "Web thương mại dien tu",
                frontend: "Reactjs",
                backend: "nodejs",
                members: 1,
                role: "Front-end developer",
                demo: "https://www.google.com.vn/",
            }
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "3",
            shortDescription: "shortDescription 3",
            details: {
                description: "Web thương mại dien tu",
                frontend: "Reactjs",
                backend: "nodejs",
                members: 1,
                role: "Front-end developer",
                demo: "https://www.google.com.vn/",
            }
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "4",
            shortDescription: "shortDescription 4",
            details: {
                description: "Web thương mại dien tu",
                frontend: "Reactjs",
                backend: "nodejs",
                members: 1,
                role: "Front-end developer",
                demo: "https://www.google.com.vn/",
            }
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "5",
            shortDescription: "shortDescription 5",
            details: {
                description: "Web thương mại dien tu",
                frontend: "Reactjs",
                backend: "nodejs",
                members: 1,
                role: "Front-end developer",
                demo: "https://www.google.com.vn/",
            }
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "6",
            shortDescription: "shortDescription 6",
            details: {
                description: "Web thương mại dien tu",
                frontend: "Reactjs",
                backend: "nodejs",
                members: 1,
                role: "Front-end developer",
                demo: "https://www.google.com.vn/",
            }
        },
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    };



    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                //title={dataDetail && dataDetail.title ? `Project ${dataDetail.title}` : ""}
                title={
                    <span style={{ color: '#509966', fontSize: '16px' }}>
                        {dataDetail && dataDetail.title ? `Project ${dataDetail.title}` : ""}
                    </span>}
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                // onCancel={handleCloseModal}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false}
                centered
            >
                {dataDetail &&
                    <ul style={{ paddingLeft: '30px', fontSize: '14px' }}>
                        <li>Description: {dataDetail.details.description}</li>
                        <li>Frontend: {dataDetail.details.frontend}</li>
                        <li>Backend: {dataDetail.details.backend}</li>
                        <li>Members: {dataDetail.details.members}</li>
                        <li>Role: {dataDetail.details.role}</li>
                        <li>Demo:
                            &nbsp;<a style={{ color: '#416e33' }} href={dataDetail.details.demo} target="_blank">{dataDetail.details.demo} </a>
                        </li>
                    </ul>
                }
            </Modal>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>Meet my completed projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div className="inner" title="View details" style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setDataDetail(item);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <div className="icon">
                                                    <img className="svg" src={item.image} />
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className="view_detail" style={{ padding: '5px 0' }}>
                                                    <span style={{ cursor: 'pointer', color: '#509966' }}
                                                        onClick={() => {
                                                            setDataDetail(item);
                                                            setIsModalOpen(true);
                                                        }}
                                                    >
                                                        {/* <BsArrowRight />&nbsp;  */}
                                                        View details
                                                    </span>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Projects;