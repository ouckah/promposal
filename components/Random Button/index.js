import React, { useState } from "react";

const RandomButton = ({ text, minHeight, maxHeight}) => 
{
  const [position, setPosition] = useState({});

  const handleClick = () => 
  {
    const maxWidth = window.innerWidth - 100;
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor((Math.random() * ({ maxHeight } - { minHeight })) + { minHeight });
    setPosition({ top: y, left: x });
  };

  return (
    <button
      className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
      style={{ position: "absolute", ...position }}
      onClick={handleClick}
    >
      { text }
    </button>
  );
};

export default RandomButton;