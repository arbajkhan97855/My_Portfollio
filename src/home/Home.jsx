import React from "react";
import { Navbar } from "../componends/Navbar";
import { Hero } from "../componends/Hero";
import { Experience } from "../componends/Experience";
import { Skills } from "../componends/Skills";
import { Project } from "../componends/Projects";
import { Contact } from "../componends/Contact";

export function Home(){
    return(
        <>
        <Navbar />
        
         <div class="container">
         <Hero />
        <Experience />
        <Skills />
        <Project />
        <Contact />
         </div>
       
        </>
    )
}