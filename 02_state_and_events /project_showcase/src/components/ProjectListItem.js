import React, { useState } from "react";

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  
  // Array Destructuring Assignment
  const [ clapCount, clapCountSetter ] = useState(0);
  
  // console.log(clapCount);
  // clapCount => 0

  // 

  // console.log(clapCount);
  // clapCount => 1

  // Callback (Helper) Function for Click Event
  function addClap() {
    
    // Directly Mutating State
    // clapCountSetter(clapCount + 1);
    
    // Not Directly Mutating State
    clapCountSetter(prevCount => prevCount + 1);
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={addClap} className="claps">👏{(clapCount)}</button>
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
