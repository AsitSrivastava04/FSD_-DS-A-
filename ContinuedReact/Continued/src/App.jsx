import React, { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);
  const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
 
  const left = () => {
  
    setIndex(index === 0 ? images.length - 1 : index - 1);
    console.log("left button");
  };

  const right = () => {
    // Loops back to the first image if you click right on the last image
    setIndex(index === images.length - 1 ? 0 : index + 1);
    console.log("right button");
  };

  return (
    <div>
      <h1>image slider</h1>
      
      <button onClick={left}>Left</button>
      
      {/* Removed quotes around the curly braces so the variable evaluates properly */}
      <img src={images[index]} alt={`slide-${index + 1}`} />
      
      <button onClick={right}>Right</button>
    </div>
  );
};

export default App;