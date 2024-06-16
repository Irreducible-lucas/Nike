
import React, { useState, useEffect } from "react";

const AnimatedNumber = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [count, endValue]);

 

  return ( 
    <span>{count}</span>
  );
}

export default AnimatedNumber;