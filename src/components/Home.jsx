import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="home" >
      <div className="container parentHome">
        <p style={{color:' #da0037'}}>Hi, My name is</p>
        <h1 style={{color:' #ccd6f6', fontSize:"70px"}}>Ayoub Baslam</h1>
        <h2  style={{color:' #8892b0' , fontSize:"60px"}}>I'm a Frontend Developer</h2>
        <p  style={{color:' #8892b0', maxWidth:"700px"}}>
          I'm a Frontend Developer I like to write a clean and simple code, I like to work with a team and learn new thing, I love
          what I do.
        </p>
        <button className="button" >
          View Work 
          <span ><HiArrowNarrowRight size={20}/></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
