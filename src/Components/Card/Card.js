import React from "react";
import "./Card.css";

function Card({ emoji, heading, deatil }) {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{deatil}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
}

export default Card;
