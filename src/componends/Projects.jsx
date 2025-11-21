import React from "react";
import { Projects } from "../data/project";

export function Project() {
    return (
        <>
            <div className="container projects my-3" id="project-id">
                <h1 data-aos="fade-up" data-aos-duration="1000">PROJECTS</h1>
                <div className="row d-flex justify-content-center align-content-center" >
                    {
                        Projects.map((project) => {
                            return (
                                <>
                                    <div key={project.id} className="my-4  col-sm-4 col-md-4 col-lg-3 mx-4" id="project-box" >
                                        <div className="card bg-dark text-light" 
                                        style={{ border: "1px solid yellow", boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)" }}
                                        data-aos="flip-right" data-aos-duration="1000" >
                                        <div className="img d-flex justify-content-center align-content-center p-3">
                                        <img src={project.imageSrc} alt="loading..." className="card-img-top"
                                         id="project-data"/>
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{project.title}</h5>
                                                <p className="card-text">{project.description}</p>
                                                <a href={project.demo} className="btn btn-primary mx-3">
                                                   Demo
                                                </a>
                                                 <a href={project.demo} className="btn btn-warning">
                                                   Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}