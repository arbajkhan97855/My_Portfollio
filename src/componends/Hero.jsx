import React, { useEffect, useRef } from "react";
import { HeroImg } from "../data/hero";
import resume from "../pdf/Arbaj_khan_resume6.pdf"
import Typed from "typed.js"


export function Hero(){
    const typedRef = useRef(null)
    useEffect(()=>{
      const option = {
        strings:["Welcome to my profile","My name is arbaj khan","I am a full stack developer","Web Developer(MERN Stack)"],
        typeSpeed:50,
        backSpeed:50,
       loop:true
      }
      const typed = new Typed(typedRef.current, option)
      return () => {
        typed.destroy()
      }
    }, [])
    return(
         <>
          <div className="container  home" id="hero-id">
             <div className="right order-1 order-md-2" data-aos="fade-up-left" data-aos-duration="1000">
            <div className="img">
             <img src={HeroImg[0].img} alt="loading hero" />
            </div>
          </div>
          <div className="left order-2 order-md-1" data-aos="fade-up-right" data-aos-duration="1000">
            <h1 ref={typedRef}></h1>
          <a href={resume} className="btn btn-outline-warning my-3"  download="Arbaj_resume.pdf">Download Resume</a>
        </div>
         
        </div>
        
        </>
    )
}