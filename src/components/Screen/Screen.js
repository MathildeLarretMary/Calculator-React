import { useEffect, useRef, useState } from 'react';

import './Screen.css';

export default function Screen({ changeScreen, text}) {

  //state
  const [fontSize, setFontSize]= useState(2.5)
  const screenWidth = useRef(0)
  const textWidth = useRef(text)
  
  //comportement
  const needToResize = (valueOne, valueTwo) => {

    if(valueOne + 50 >= valueTwo) {
      return setFontSize(fontSize - 0.2)
    } else {
      return setFontSize(2.5)
    }

  }

  useEffect(() => {
    needToResize(textWidth.current.offsetWidth,screenWidth.current.offsetWidth)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[text])
   
  //render
  return (
    <div 
      ref={screenWidth}
      onChange={changeScreen}
      className="Screen" >
      <span 
      ref={textWidth}
      style={{
      fontSize: `${fontSize}rem`
      }}>{text}</span>
    </div>
  );
}
