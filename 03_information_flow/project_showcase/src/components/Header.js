import React from "react";
// import { useState } from "react";

const Header = ({ toggleMode, isDarkMode }) => {
  // Limitations => State Management is Constrained to Component It's Defined In
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // console.log(props);

  const handleClick = () => toggleMode();

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // console.log(myArray);
  // myArray.push(1);
  // console.log(myArray);
  
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
