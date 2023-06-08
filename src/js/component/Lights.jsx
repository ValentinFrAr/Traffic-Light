import React from "react";

const Lights = ({
  color,
  newColor,
  handleColorChange,
  handleNewColorClick,
}) => {
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
    </div>
  );
};

export default Lights;
