import React, { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
  
      // console.log(timer);

      return () => clearTimeout(timer);
    });
  
    return <h1>I've rendered {count} times!</h1>;
};

export default Timer;