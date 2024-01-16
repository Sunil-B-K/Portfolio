import React, { useContext } from "react";
import "./Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floating from "../Floatingdev/Floating";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import Floatdv from "../Floatingdv/Floatdv";

function Intro() {
  // Transition
  const transition = { duration: 2, type: "spring" };
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>SUNIL KULIGOD</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true} className="button i-button">
          Hire me
        </Link>
        {/* <button className=" button i-button">Hire me</button> */}
        <div className="i-icons">
          <a href="https://github.com/Sunil-B-K" target="blank">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/sunil-kuligod21/" target="blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/sunil.kuligod/">
            <img src={instagram} alt="instagram" target="blank" />
          </a>
        </div>
      </div>
      <div className="  i-right">
        <img src={vector1} alt="vector1" />
        <img src={vector2} alt="vector2" />
        <img src={boy} alt="boy" />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
          style={{ top: "-4%", left: "68%" }}
        >
          <Floating image={crown} text1="web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ top: "18rem", left: "0rem" }}
        >
          <Floating image={thumbup} text1="Best design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
