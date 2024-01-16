import React, { useContext } from "react";
import Upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Works() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="Awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>

        <span> Brands&Clients</span>

        <span>
          jsdgSHmns jsdfjdfb shfgjfdiujnv synhudfjnkhf <br />
          xvvhnvvdsk jsdv js s sje dj dsjs
          <br />
          jsdgSHmns jsdfjdfb shfgjfdiujnv synhudfjnkhf <br />
          xvvhnvvdsk jsdv js s sje dj dsjs
          <br />
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right sides */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCricle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCricle">
            <img src={fiverr} alt="fiverr" />
          </div>

          <div className="w-secCricle">
            <img src={amazon} alt="amazon" />
          </div>

          <div className="w-secCricle">
            <img src={Shopify} alt="Shopify" />
          </div>

          <div className="w-secCricle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        {/* background secCricle */}
        <div className="w-backCricle buleCricle"></div>
        <div className="w-backCricle yellowCricle"></div>
      </div>
    </div>
  );
}

export default Works;
