import "./LandingPage.css"

import React from 'react'

import IntroImg from "../images/intro_bg.jfif"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p style={{marginBottom:'10px'}}>HI, I'M A Full Stack Developer</p>
            <p style={{fontSize:'19px', marginBottom:'25px', textTransform:'none'}}>Check out my latest projects below!</p>
            {/* <h3>BlockChain Developer</h3> */}
            <div>
                <Link to="/project" className="btn">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
