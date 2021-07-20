import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ char }) => {
  const charNameLink = char.name.toLowerCase().replace(/\s/g, "-");

  let statusColor = {
    backgroundColor: "",
  };

  if (char.status === "Alive") statusColor.backgroundColor = "green";
  else if (char.status === "Dead") statusColor.backgroundColor = "red";
  else statusColor.backgroundColor = "gray";

  return (
    <Link to={`/${charNameLink}`}>
      <div className="card">
        <img src={char.image} />
        <div className="card-container">
          <div className="card-container__section">
            <h4>{char.name}</h4>
            <span className="status">
              <span className="status__icon" style={statusColor}></span>
              {char.status} - {char.species}
            </span>
            <div className="gender">{char.gender}</div>
          </div>
          <div className="card-section">
            <span>
              <strong>Last known location:</strong>
            </span>
            <p>{char.location.name}</p>
          </div>
          <div className="card-section">{/* Card footer */}</div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterItem;
