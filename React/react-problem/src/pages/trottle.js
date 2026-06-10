import React from 'react';
import { useEffect, useState } from "react";

function throttle (fn,dealy) {
  let lastCall = 0;
  return function (...arg) {
    let now = Date.now();
    if(now - lastCall >= dealy){
      lastCall = now;
     fn(...arg);
     
    }
  }
}

export default function Throttle() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  

  useEffect(() => {
    const handleResize = throttle(() => {
      setScreenSize(window.innerWidth);
      console.log("update");
    }, 2000);
    

    window.addEventListener("resize", handleResize);

    

    return () => {
      window.removeEventListener("resize", handleResize);
      
    };
  }, []);

  return <p>Width: {screenSize}</p>;
}