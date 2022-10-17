import ProjectListItem from "./ProjectListItem";
import { useState } from "react";

const ProjectList = ({ projects }) => {
  
  // State to Manage Input Value
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Search Results (Initially Includes All Projects)
  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // List of Projects to Render as ProjectListItems
  const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  // Callback Function to Keep "searchQuery" State Aligned with Input Value
  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>

      <h1>{ searchQuery }</h1>

      <h2>Projects</h2>
      {/* <h1>Count: {count}</h1> */}
      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
