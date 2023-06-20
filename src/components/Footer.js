import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaGithub
} from "react-icons/fa";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ Colo: "#fff", marginRight: "2rem" }}
              className="footer_icon"
            />
            <div>
              <p>Gilgit-Baltistan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ Colo: "#fff", marginRight: "2rem" }}
              />
              +92554359787
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ Colo: "#fff", marginRight: "2rem" }}
              />
              mkhalilbob@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
          Hi, I'm Frontend Developer | Backend Developer | MERN Stack Developer
          </p>
          <div className="social">
            <a href="https://www.facebook.com/khalilmuhammad123">
              <FaFacebook
                size={30}
                style={{ Colo: "#fff", marginRight: "1rem" }}
                className="footer_icon"
              />
            </a>
            <a href="">
              <FaTwitter
                size={30}
                style={{ Colo: "#fff", marginRight: "1rem" }}
                className="footer_icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-khalil-712ba9265/">
              <FaLinkedin
                size={30}
                style={{ Colo: "#fff", marginRight: "1rem" }}
                className="footer_icon"
              />
            </a>
            <a target="_blank" href="https://github.com/MKBob">
              <  FaGithub
                size={30}
                style={{ Colo: "#fff", marginRight: "1rem" }}
                className="footer_icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
