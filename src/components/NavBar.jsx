import React, { useState } from "react";
import logo from "../assets/ayoub-baslam-high-resolution-logo-transparent.png";
import { FaBars,FaTimes, FaGithub,FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";

const NavBar = () => {
  const [navB, setNav] = useState(true);

  let handleClick = () => setNav(!navB);
  return (
    <div className="navBar ">
      <div style={{ height: "100%" }} className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <img src={logo} alt="logo" width={"150px"} />
          </div>
          {navB ? (
            <nav className="Nav">
              <ul className="menu">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#Work">Work</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="phoneNav">
              <ul className="menu">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#Work">Work</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          )}
          <div onClick={handleClick} className="Burger">
            {navB ? <FaBars className="icon"  /> : <FaTimes className="icon" />}
          </div>

          <div className="socialMedia">
            <ul>
              <li className="icon" > <a style={{backgroundColor:"#2b3137"}} href="/"><span>Github</span> <FaGithub size={30} /></a></li>
              <li className="icon" > <a style={{backgroundColor:"#0072b1"}} href="/"><span>Linkedin </span><FaLinkedin size={30} /></a></li>
              <li className="icon"> <a style={{backgroundColor:"#6fc2b0"}} href="/"><span>Mail</span> <HiOutlineMail size={30} /></a></li>
              <li className="icon"> <a style={{backgroundColor:"#28D146"}} href="/"><span>WhatsApp</span> <FaWhatsapp size={30} /></a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
