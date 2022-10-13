import React, { useState } from "react";

const Header = () => {
  // console.log(useState(false));
  
  const [ modeState, modeStateSetter ] = useState(false);
  
  function updateMode(e) {
    // console.log(e);

    // setterFunction(newStateVal);
    modeStateSetter(!modeState);
  }

  // console.log(modeState);
  
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={updateMode}>{ modeState ? "Light Mode" : "Dark Mode" }</button>
    </header>
  );
}

export default Header;
