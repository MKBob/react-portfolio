import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>Hi, I'm Frontend Developer | Backend Developer | MERN Stack Developer. I create responsive secure website for my clints.</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div>

    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={React1} className="img" alt="true"/>
        </div>
        <div className="img-stack bottom">
          <img src={React2} className="img" alt="true"/>
        </div>
      </div>
    </div>
  </div>;
};

export default AboutContent;
