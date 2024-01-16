import React, { useContext } from "react";
import "./Service.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import sunil from "./sunil.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Service() {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="Awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span> Awesome</span>
        <span>
          jsdgSHmns jsdfjdfb shfgjfdiujnv synhudfjnkhf <be />
          xvvhnvvdsk jsdv js s sje dj dsjs
        </span>
        <a href={sunil} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* annimation */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={" Design"}
            deatil={" photoshop,adobe,figma,skecth,xgjhgj"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={glasses}
            heading={" Developer"}
            deatil={" HTML,CSS,REACT.JS,JavaScript"}
          />
        </motion.div>

        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={humble}
            heading={" UI/UX"}
            deatil={" HTML,CSS,REACT.JS,JavaScript"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Service;
