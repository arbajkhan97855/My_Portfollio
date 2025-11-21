import React from "react";
import { AllSkills } from "../data/skills";

export function Skills(){
    return(
         <>
         <div className="container skills" id="skills-id">
            <h1 data-aos="fade-up" data-aos-duration="1000">SKILLS</h1>        
            <div className="items" >
           { AllSkills.map((skill)=>{
            return(
                <>
                <div className="item" key={skill.id} data-aos="flip-left" data-aos-duration="1000">
                    <img src={skill.imageSrc} alt="loading..." />
                    <h3>{skill.title}</h3>
                </div>
                </>
            )
           })}             
            </div>
         </div>
        </>
    )
}