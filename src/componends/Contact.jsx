import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export function Contact(){
    return(
        <>
         <div className="container contact" id="contact-id">
            <h1 data-aos="fade-up" data-aos-duration="1000">CONTACT</h1>
            <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
                <a className="item" href="https://www.instagram.com/mr_arbaj_pathan01?igsh=OGQ5ZDc2ODk2ZA==" target="_blank"><FaInstagram className="icons"/></a>
                <a className="item" href="https://www.snapchat.com/add/pathan20237256?share_id=RDofnM3Uli4&locale=en-US" target="_blank"><FaSnapchat className="icons"/></a>
                <a className="item" href="https://www.linkedin.com/in/arbaj-khan-3314672a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"><CiLinkedin className="icons"/></a>
                <a className="item" href="http://t.me/arbaj9164" target="_blank"><FaTelegramPlane className="icons"/></a>
                <a className="item" href="mailto:pathanarbaj03328@gmail.com" target="_blank"><SiGmail className="icons"/></a>
            </div>
         </div>
        </>
    )
}