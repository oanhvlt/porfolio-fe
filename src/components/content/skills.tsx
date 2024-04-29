import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        // <div className="arlo_tm_section" id="skills">
        //     {/* front-end */}
        //     <div className="arlo_tm_skills_wrap">
        //         <div className="container">
        //             <div className="inner_wrap">
        //                 <div className="leftbox">
        //                     <div className="arlo_tm_mini_title_holder">
        //                         <h4>Front-end</h4>
        //                     </div>
        //                     <li>Proficiency in JavaScript ES6/TypeScript working with React.js, Next.js.</li>
        //                     <li>Proficiency in Redux, React Router, Lifecycle/React Hooks.</li>
        //                     <li>Understanding  Component-based architecture: build complex user interfaces.</li>
        //                     <li>API integration: handle data from APIs using tools like Axios or Fetch API.</li>
        //                     <li>Performance optimization: code splitting, image optimization, and lazy loading for improving site speed and user experience.</li>
        //                 </div>
        //                 <div className="rightbox">
        //                     <div className="progress_bar_wrap_total">
        //                         <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
        //                             <div className="arlo_tm_progress" data-color="#000">
        //                                 <span>
        //                                     <span className="label">HTML/CSS/Javascript/TypeScript</span>
        //                                     {/* <span className="experience">10 years of experience</span> */}
        //                                     <span className="number">90</span>
        //                                 </span>
        //                                 <ProgressBar completed={90} bgColor="#509966" height="7px" isLabelVisible={false} />
        //                             </div>
        //                             <div className="arlo_tm_progress" data-color="#000">
        //                                 <span>
        //                                     <span className="label">React.JS</span>
        //                                     {/* <span className="experience">3 years of experience</span> */}
        //                                     <span className="number">80</span>
        //                                 </span>
        //                                 <ProgressBar completed={80} bgColor="#509966" height="7px" isLabelVisible={false} />
        //                             </div>
        //                             <div className="arlo_tm_progress" data-color="#000">
        //                                 <span>
        //                                     <span className="label">Next.JS</span>
        //                                     {/* <span className="experience">3 years of experience</span> */}
        //                                     <span className="number">80</span>
        //                                 </span>
        //                                 <ProgressBar completed={80} bgColor="#509966" height="7px" isLabelVisible={false} />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* back-end */}
        //     <div className="arlo_tm_skills_wrap">
        //         <div className="container">
        //             <div className="inner_wrap">
        //                 <div className="leftbox">
        //                     <div className="arlo_tm_mini_title_holder">
        //                         <h4>Back-end</h4>
        //                     </div>
        //                     <li>RESTful API development.</li>
        //                     <li>Database management: MySQL, PostgreSQL, MongoDB, using libraries  for database operations (like Sequelize, Mongoose).</li>
        //                     <li>Authentication and authorization: implementing user authentication and authorization using libraries like Passport.js/JSON Web Tokens (JWT).</li>
        //                     <li>Error handling and debugging.</li>
        //                     <li>Deployment and DevOps: Understanding of deploying Node.js applications to servers or cloud platforms( AWS/ Heroku), familiarity with continuous integration and deployment (CI/CD) pipelines.</li>
        //                 </div>
        //                 <div className="rightbox">
        //                     <div className="progress_bar_wrap_total">
        //                         <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
        //                             <div className="arlo_tm_progress" data-color="#000">
        //                                 <span>
        //                                     <span className="label">Node.JS/Nest.JS</span>
        //                                     {/* <span className="experience">3 years of experience</span> */}
        //                                     <span className="number">80</span>
        //                                 </span>
        //                                 <ProgressBar completed={80} bgColor="#509966" height="7px" isLabelVisible={false} />
        //                             </div>
        //                             <div className="arlo_tm_progress" data-color="#000">
        //                                 <span>
        //                                     <span className="label">Database</span>
        //                                     {/* <span className="experience">3 years of experience</span> */}
        //                                     <span className="number">80</span>
        //                                 </span>
        //                                 <ProgressBar completed={80} bgColor="#509966" height="7px" isLabelVisible={false} />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="arlo_tm_section" id="skills">
            {/* front-end */}
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4 style={{ color: '#509966' }}>Front-end</h4>
                            </div>
                            <li>Proficiency in JavaScript ES6/TypeScript working with React.js, Next.js.</li>
                            <li>Proficiency in Redux, React Router, Lifecycle/React Hooks.</li>
                            <li>Understanding Component-based architecture: build complex user interfaces.</li>
                            <li>API integration: handle data from APIs using tools like Axios or Fetch API.</li>
                            <li>Performance optimization: code splitting, image optimization, and lazy loading for improving site speed and user experience.</li>
                            <li>Responsive design and cross-browser compatibility.</li>
                            <li>UI component libraries for React: React Bootstrap, Material-UI, Ant Design.</li>
                        </div>
                        <div className="rightbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4 style={{ color: '#509966' }}>Back-end</h4>
                            </div>
                            <li>RESTful API development.</li>
                            <li>Database management: MySQL, PostgreSQL, MongoDB, using libraries  for database operations (like Sequelize, Mongoose).</li>
                            <li>Authentication and authorization: implementing user authentication and authorization using libraries like Passport.js/JSON Web Tokens (JWT).</li>
                            <li>Error handling and debugging.</li>
                            <li>Deployment and DevOps: Understanding of deploying Node.js applications to servers or cloud platforms( AWS/ Heroku), familiarity with continuous integration and deployment (CI/CD) pipelines.</li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;