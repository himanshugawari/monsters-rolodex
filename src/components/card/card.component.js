import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      {/* <img src={`https://robohash.org/${id}?200x200`} alt="robot" /> */}
      <img
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
        alt="robot"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
