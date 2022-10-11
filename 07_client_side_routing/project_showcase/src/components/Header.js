import React from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1 className="branding">
        <a href="/"><span className="logo">{"//"}</span>
          Project Showcase
        </a>
      </h1>
      <nav>
        <div className="navigation">
          <a className="button" href="/projects">
            All Projects
          </a>
          <a className="button" href="/projects/new">
            Add Project
          </a>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
