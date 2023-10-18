import React from "react";
import "./navbar.css";
import Logo from "../images/logo.png"


const navbar=()=>{
    return(
        <div className="navbar-section">
            <div className="logo-img-section">
                <img className="logo-img" src={Logo}></img>
                <div className="title-section">
                    <h1 className="title1">Aviral</h1>
                    <h1 className="title2">Digital Solutions</h1>
                </div>
            </div>
        <div className="navbar-list-section">    
        <ul className="navbar-list">
            <li><a className="list" href="#our-expertise">Our Expertise</a></li>
            <li><a className="list" href="#mission-vission"> Mission</a></li>
            <li><a className="list" href="#mission-vission"> Vission</a></li>
            <li><a className="list" href="#project">Project</a></li>
        </ul>
        </div>
        </div>

    )
}

export default navbar;