import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkdIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sunilkuligod21@gmail.com</span>
        <span>7760766220</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/sunil.kuligod/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/sunil-kuligod21/" target="blank">
            <LinkdIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Sunil-B-K" target="blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
