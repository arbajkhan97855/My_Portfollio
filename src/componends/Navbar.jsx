import React from "react";

export function Navbar(){
    return(
        <>
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#" className="nav_items">Home</a>
            <a href="#experience-id" className="nav_items">Experience</a>
            <a href="#skills-id" className="nav_items">Skills</a>
            <a href="#project-id" className="nav_items">Project</a>
            <a href="#contact-id" className="nav_items">Contact</a>
        </div>
    </div>
        </>
    )
}