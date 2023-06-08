import React, { useState } from "react";
import Lights from "./Lights.jsx";
import Buttons from "./Buttons.jsx";

const Home = () => {
  const [color, setColor] = useState("red-click");
  const [newColor, setNewColor] = useState(false);

  const handleRandomColor = () => {
    const colors = ["red-click", "yellow-click", "green-click"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setNewColor(false);
  };

  const handleNewColor = () => {
    setNewColor(!newColor);
  };

  return (
    <div className="content-traffics d-flex">
      <div className="trafic-container">
        <div className="top"></div>
        <div className="traffic">
          <Lights
            color={color}
            newColor={newColor}
            handleColorChange={setColor}
            handleNewColorClick={() => setColor("purple")}
          />
          <Buttons
            handleRandomColor={handleRandomColor}
            handleNewColor={handleNewColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
