// import React from "react";
// import projects from "./Data/projects.json";

// const Project = () => {
//     return (
//         <>
//             <div className="container projects" id="projects">
//                 <h1>PROJECTS</h1>
//                 <div className="row">
//                     {projects.map((Data) => (
//                         <>
//                             <div key={Data.id} className="">
//                                 <div
//                                     className="card "
//                                     style={{ width: "18rem" }}
//                                     data-aos="flip-left"
//                                     data-aos-easing="ease-out-cubic"
//                                     data-aos-duration="2000"
//                                 >
//                                     <div className="img">
//                                         <img
//                                             src={`/images/${Data.imageSrc}`}
//                                             className="card-img-top"
//                                             alt="..."
//                                         />
//                                     </div>
//                                     <div className="card-body text-center">
//                                         <h5 className="card-title">{Data.title}</h5>
//                                         <p className="card-text">{Data.description}</p>
//                                         <a href={Data.demo} className="btn btn-primary mx-3">
//                                             Demo
//                                         </a>
//                                         <a href={Data.source} className="btn btn-warning">
//                                             Code
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };


import React from "react";
import projects from "./Data/projects.json";

const Project = () => {
    return (
        <>
            <div className="container projects" id="projects">
                <h1>PROJECTS</h1>
                <div className="row">
                    {projects.map((Data) => (
                        <div key={Data.id} className="card" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">
                            <div
                                className="img"
                                // data-aos="flip-left"
                                // data-aos-easing="ease-out-cubic"
                                // data-aos-duration="2000"
                            >
                                <img
                                    src={`/images/${Data.imageSrc}`}
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{Data.title}</h5>
                                <p className="card-text">{Data.description}</p>
                                <a href={Data.demo} className="btn btn-primary mx-3">
                                    Demo
                                </a>
                                <a href={Data.source} className="btn btn-warning">
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

// export default Project;


export default Project;
