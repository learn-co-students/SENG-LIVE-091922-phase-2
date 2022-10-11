import ProjectListItem from "./ProjectListItem";
import { useState, useEffect } from "react";

const ProjectList = ({
  projects,
  onEditProject,
  onDeleteProject,
  setSelectedPhase,
  setSearchQuery
}) => {
  const [searchInputText, setSearchInputText] = useState("");

  const projectItems = projects.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        project={project}
        onEditProject={onEditProject}
        onDeleteProject={onDeleteProject}
      />
    );
  });

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInputText);
    }, 300)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInputText])

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={() => setSelectedPhase("")}>All</button>
        <button onClick={() => setSelectedPhase("5")}>Phase 5</button>
        <button onClick={() => setSelectedPhase("4")}>Phase 4</button>
        <button onClick={() => setSelectedPhase("3")}>Phase 3</button>
        <button onClick={() => setSelectedPhase("2")}>Phase 2</button>
        <button onClick={() => setSelectedPhase("1")}>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
};

export default ProjectList;
