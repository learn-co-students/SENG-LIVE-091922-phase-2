import React, { useState } from "react";
const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  const [clapsCount, setClapsCount] = useState(0);

  const handleClick = () => {
    setClapsCount((prevClaps) => prevClaps + 1);
    setClapsCount((prevClaps) => prevClaps + 1);
  };
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClick} className="claps">
          👏{clapsCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
