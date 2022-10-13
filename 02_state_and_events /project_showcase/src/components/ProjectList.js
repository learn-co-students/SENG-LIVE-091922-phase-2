import ProjectListItem from "./ProjectListItem";
import React, { useState } from "react";

const ProjectList = ({ projects }) => {

  const [ searchQuery, searchQuerySetter ] = useState("");

  // projects => An Array of Project Objects
  // searchResults => An Array of Project Objects
  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // map => returns a new Array
  // projectListItems => an array of <ProjectListItem /> Components
  const projectListItems = searchResults.map((project) => (
    
    // Shorthand => Spread Operator to Deconstruct Each project Object
    <ProjectListItem key={project.id} {...project} />

    // Longhand
    // <ProjectListItem 
    //   key={project.id} 
    //   id={project.id}
    //   name={project.name}
    //   about={project.about}
    //   phase={project.phase}
    //   link={project.link}
    //   image={project.image}
    // />
  ));

  function handleSearch(e) {
    searchQuerySetter(e.target.value);
  }

  // console.log("Component Rerendered!");
  // console.log(searchQuery);

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleSearch} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
