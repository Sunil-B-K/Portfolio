import React from "react";
import "./Floating.css"; // Import the CSS file with the correct relative path
// import "../Intro/Intro.css";
function Floating({ image, text1, text2 }) {
  return (
    <div className="f-float">
      <img src={image} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
}

export default Floating;
