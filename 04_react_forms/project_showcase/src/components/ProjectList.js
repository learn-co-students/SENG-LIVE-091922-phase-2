import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, onLoadProjects }) => {

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const projectListItems = searchResults.map(project => (
    <ProjectListItem
      key={project.id}
      {...project}
    />
  ))

  return (
    <section>
      <button onClick={onLoadProjects}>Load Projects</button>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;