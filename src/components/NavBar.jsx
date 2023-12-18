import React, { useState } from "react";
import logo from "../assets/ayoub-baslam-high-resolution-logo-transparent.png";
import { FaBars,FaTimes, FaGithub,FaLinkedin} from "react-icons/fa";

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
            {navB ? <FaBars className="icon" /> : <FaTimes className="icon" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
