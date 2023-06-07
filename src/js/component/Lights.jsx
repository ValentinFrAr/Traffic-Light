import React, { useState } from "react";

function Lights() {
  const [color, setColor] = useState("red-click");
  const [newColor, setNewColor] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleRandomColor = () => {
    const colors = ["red-click", "yellow-click", "green-click"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setNewColor(false);
  };

  const handleNewColor = () => {
    setNewColor(!newColor);
  };

  const handleNewColorClick = () => {
    setColor("purple");
  };

  return (
    <div>
      <div
        className={color === "red-click" ? "red-click" : "red"}
        onClick={() => handleColorChange("red-click")}
      >
        {newColor && (
          <div
            className={color === "purple-click" ? "purple" : "purple-click"}
            onClick={handleNewColorClick}
          ></div>
        )}
      </div>
      <div
        className={color === "yellow-click" ? "yellow-click" : "yellow"}
        onClick={() => handleColorChange("yellow-click")}
      >
        {newColor && (
          <div
            className={color === "purple-click" ? "purple" : "purple-click"}
            onClick={handleNewColorClick}
          ></div>
        )}
      </div>
      <div
        className={color === "green-click" ? "green-click" : "green"}
        onClick={() => handleColorChange("green-click")}
      >
        {newColor && (
          <div
            className={color === "purple-click" ? "purple" : "purple-click"}
            onClick={handleNewColorClick}
          ></div>
        )}
      </div>
      <div className="buttons">
        <div className="btn-random">
          <button className="btn-change" onClick={handleRandomColor}>
            Random Traffic
          </button>
        </div>
        <div className="btn-new">
          <button className="btn-change" onClick={handleNewColor}>
            New Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lights;
