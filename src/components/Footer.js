import "./FooterStyle.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
// import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                <div>
                    <p>Gaya, Bihar</p>
                    <p>India, 823001</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                +91-9693711544
                </h4>                
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                souchit21@gmail.com
                </h4>                
            </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>Hello there!</p>
          <p>Lets connect.</p>
          <div className="social">
            <a href="https://www.instagram.com/_souchit02?igsh=emt6eHNmMDE4MHph" target="_blank" rel="noreferrer"><FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
            {/* <a href="https://www.facebook.com/profile.php?id=100056043160664" target="_blank" rel="noreferrer"><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} /></a> */}
            <a href="https://www.linkedin.com/in/souchit-kumar-623386201/" target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
            <a href="https://github.com/souchit21/" target="_blank" rel="noreferrer"><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
