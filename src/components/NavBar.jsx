import React, { useState } from "react";
import logo from "../assets/ayoub-baslam-high-resolution-logo-transparent.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
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

          <nav className={navB ? "Nav" : "Nav hidden"}>
            <ul className="menu">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} duration={500}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* phoooone */}
          <nav className={!navB ? "phoneNav" : "phoneNav hidden"}>
            <div onClick={handleClick} className="fatimes">
              <FaTimes className="icon Fatimes" size={30} />
            </div>
           <div className="parantPhoneMenu">
           <ul className="menu">
              <li>
                <Link
                  onClick={handleClick}
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="work"
                  smooth={true}
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="socialMediaPhone">
              <ul>
                <li className="icon">
                  {" "}
                  <a style={{ backgroundColor: "#2b3137" }} href="/">
                    {" "}
                    <FaGithub size={30} />
                  </a>
                </li>
                <li className="icon">
                  {" "}
                  <a style={{ backgroundColor: "#0072b1" }} href="/">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li className="icon">
                  {" "}
                  <a style={{ backgroundColor: "#6fc2b0" }} href="/">
                    {" "}
                    <HiOutlineMail size={30} />
                  </a>
                </li>
                <li className="icon">
                  {" "}
                  <a style={{ backgroundColor: "#28D146" }} href="/">
                    <FaWhatsapp size={30} />
                  </a>
                </li>
              </ul>
            </div>
           </div>
          </nav>

          <div onClick={handleClick} className="Burger">
            {navB ? <FaBars className="icon" /> : null}
          </div>

          <div className="socialMedia">
            <ul>
              <li className="icon">
                {" "}
                <a style={{ backgroundColor: "#2b3137" }} href="/">
                  <span>Github</span> <FaGithub size={30} />
                </a>
              </li>
              <li className="icon">
                {" "}
                <a style={{ backgroundColor: "#0072b1" }} href="/">
                  <span>Linkedin </span>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li className="icon">
                {" "}
                <a style={{ backgroundColor: "#6fc2b0" }} href="/">
                  <span>Mail</span> <HiOutlineMail size={30} />
                </a>
              </li>
              <li className="icon">
                {" "}
                <a style={{ backgroundColor: "#28D146" }} href="/">
                  <span>WhatsApp</span> <FaWhatsapp size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
