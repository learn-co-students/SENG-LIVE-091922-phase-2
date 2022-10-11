import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsContainer from "./components/ProjectsContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Home />
      <About />
      <ProjectsContainer />
    </div>
  );
};

export default App;
