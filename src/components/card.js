import React from "react";
import "./card.css";
import cards from "./cards";

const Card = () => {
  return (
    <div className="card">
      {cards.map((card, index) => (
        <div className="cards-box">
          <img className="card-image" src={card.img} alt="" />
          <p className="card-name">{card.name}</p>
          <p className="card-des">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
