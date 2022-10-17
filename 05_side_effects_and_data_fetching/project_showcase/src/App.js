import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Timer from "./components/Timer";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Callback Function Responsible for Initiating our Fetch Request
  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // };

  // useEffect
  //  => Callback Function (Behavior)
  //  => Dependency Array (Optional)

  useEffect(() => {
    
    // console.log("useEffect Behavior Fired Off!");

    // Side Effect Behavior
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));

  }, []);

  // Dependency Array
    // => Omit Entirely - Component Re-Renders Every Time State is Updated 
    // => [] - Component Renders Once, Side Effect Behavior Takes Place Once
    // => [someState, anotherState] => Run Side Effect Behavior When Dependency Variable(s) Changes


  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Callback Function to Toggle "isVisible" State
  const handleTimer = () => setIsVisible(!isVisible);  

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <button onClick={handleTimer}>Toggle Timer</button>
      { isVisible ? <Timer /> : null }
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
