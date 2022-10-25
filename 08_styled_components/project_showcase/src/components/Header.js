import React from "react";
import { NavLink, Link } from "react-router-dom";

// Without "index.js"
// import Button from "./shared/Button";

// With "index.js"
import { Button } from "./shared";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header className="navigation">
      <h1 className="branding">
        <Link to="/">
          <span className="logo">{"//"}</span>
          Project Showcase
        </Link>
      </h1>
      <nav>
        
        {/* If we want distinct DOM elements while using 
        a styled component. */}
        {/* <Button as={otherComponent} */}

        <Button as={NavLink} exact to="/projects">
          All Projects
        </Button>
        <Button as={NavLink} to="/projects/new">
          Add Project
        </Button>
        <Button as={NavLink} to="/about">
          About
        </Button>
        <Button onClick={onToggleDarkMode}>{buttonTextContent}</Button>
      </nav>
    </header>
  );
};

export default Header;
