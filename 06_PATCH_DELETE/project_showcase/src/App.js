import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

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

  // Function to Handle Project Updates
  const onUpdateProject = (updatedProject) => {
    // console.log(updatedProject);

    // Update "projects" State to Include Latest Updated Project
      
      // Return Entirely New Array Containing Updated Project (.map)

      const updatedProjects = projects.map(originalProject => {
        
        // Find Project in Question
        if (originalProject.id === updatedProject.id) {
          return updatedProject;
        } else {
          return originalProject;
        }
      });

      // Replacing Original Array of "projects" with "updatedProjects"
      setProjects(updatedProjects);
  }

  // Function to Handle Project Deletions
  const onDeleteProject = (projectId) => {
    
    // Create a New Collection of Projects, Filter Out Deleted Project
    const updatedProjects = projects.filter(originalProject => {
      
      // Return All Cases Where This is True
      return originalProject.id !== projectId
    });

    // Update "projects" State With Newest Collection
    setProjects(updatedProjects);
  }

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}  
      />
    </div>
  );
};

export default App;
