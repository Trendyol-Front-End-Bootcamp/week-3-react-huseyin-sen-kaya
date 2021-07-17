import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterPage = (props) => {
  const { match, chars } = props;
  const [lastEpisodesName, setLastEpisodesName] = useState([]);
  const char = chars.find((c) => {
    if (c.name.toLowerCase().replace(/\s/g, "-") === match.params.name)
      return c;
  });

  useEffect(() => {
    const lastEpisodesID = char.episode
      .map((link) => Number(link.match(/\d+/)[0]))
      .sort((a, b) => b - a)
      .slice(0, 5);

    fetch(`https://rickandmortyapi.com/api/episode/${lastEpisodesID.join()}`)
      .then((response) => response.json())
      .then((data) =>
        setLastEpisodesName(Array.isArray(data) ? data.reverse() : [data])
      );
  }, []);

  console.log(lastEpisodesName);
  return (
    <div>
      <div className="profile">
        <img src={char.image} />
        <div className="profile-content">
          <div className="left">
            <h4>{char.name}</h4>
            <span>{char.origin.name}</span>
            <hr></hr>
            <ul>
              <li>
                Status: <span>{char.status}</span>
              </li>
              <li>
                Species: <span>{char.species}</span>
              </li>
              <li>
                Gender: <span>{char.gender}</span>
              </li>
              <li>
                Last Location: <span>{char.location.name}</span>
              </li>
            </ul>
          </div>
          <div className="right">
            <label>Last 5 Episodes Name:</label>
            <ul>
              {lastEpisodesName.map((e) => (
                <li>{e.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="back-button">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default CharacterPage;
