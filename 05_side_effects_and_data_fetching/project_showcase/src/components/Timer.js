import React, { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
  
    // console.log(isHidden);

    const clickPage = () => console.log("Page Clicked!");

    useEffect(() => {
        
        // Side Effect => Add a Click Event Listener to "document" Object   
        document.addEventListener('click', clickPage);
        
        let timer = setTimeout(() => {
            console.log("useEffect Fired Off!");
            
            setCount((count) => count + 1);
        }, 1000);
    
        // console.log(timer);

        // Return Clean Up Function to Clear Out Side Effect
        // return () => document.addEventListener('click', () => null);
        return () => { 
            
            // Clean Up Recurring Behavior (setTimeout)
            clearTimeout(timer);
            
            // Clean Up Event Listener (clickPage)
            document.removeEventListener('click', clickPage);
        }
    });
  
    return (
        <h1>I've rendered {count} times!</h1>
    );
};

export default Timer;