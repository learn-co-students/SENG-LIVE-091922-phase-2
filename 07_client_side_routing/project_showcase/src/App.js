import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProj.id) {
        return updatedProj;
      } else {
        return ogProject;
      }
    });
    setProjects(updatedProjects);
  };

  const onDeleteProject = (deletedProj) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deletedProj.id
    );
    setProjects(updatedProjects);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      
      <Switch>
        {/* Home => "/" */}
        <Route exact path="/">
          <Home />
        </Route>
        
        {/* ProjectForm => "/projects/new" */}
        <Route path="/projects/new">
          <ProjectForm onAddProject={onAddProject} />
        </Route>
        
        {/* ProjectEditForm => "/projects/:id/edit" */}
        <Route path="/projects/:id/edit">
          <ProjectEditForm onUpdateProject={onUpdateProject} />
        </Route>
        
        {/* ProjectDetail => "/projects/:id" */}
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        
        {/* ProjectList => "/projects" */}
        <Route path="/projects">
          <ProjectList
            projects={projects}
            onDeleteProject={onDeleteProject}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
