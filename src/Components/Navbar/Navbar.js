import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">SUNIL</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              {" "}
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              {" "}
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              {" "}
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>{" "}
        </div>
        <Link to="contact" spy={true} smooth={true} className="button n-button">
          Contact
        </Link>
        {/* <button className="button n-button">Contact</button> */}
      </div>
    </div>
  );
}

export default Navbar;
