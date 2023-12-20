import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="title">
          <h1 id="skills">Skills</h1>
          <p>These are technologies I've worked with</p>
        </div>
        {/* grid skills */}
        <div className="gridSkills">
          <article>
            <img src={HTML} alt="" />
            <h3>HTML5</h3>
          </article>
          <article>
            <img src={CSS} alt="" />
            <h3>CSS3</h3>
          </article>
          <article>
            <img src={HTML} alt="" />
            <h3>HTML5</h3>
          </article>
          <article>
            <img src={JavaScript} alt="" />
            <h3>JavaScript</h3>
          </article>
          <article>
            <img src={ReactImg} alt="" />
            <h3>ReactJs</h3>
          </article>
          <article>
            <img src={Node} alt="" />
            <h3>NodeJs</h3>
          </article>
          <article>
            <img src={FireBase} alt="" />
            <h3>FireBase</h3>
          </article>
          <article>
            <img src={GitHub} alt="" />
            <h3>Github</h3>
          </article>
          <article>
            <img src={Tailwind} alt="" />
            <h3>Tailwind</h3>
          </article>
          <article>
            <img src={Mongo} alt="" />
            <h3>MongoDb</h3>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skills;
