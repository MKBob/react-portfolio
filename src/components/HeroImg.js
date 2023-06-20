import "./HeroImgStyles.css";
import Typed from "react-typed";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} className="into-img" alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <Typed
        className="home_typed"
            strings={["Frontend Developer ", "Backend Developer", "MERN Stack Developer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <div className="home_buttons">
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
