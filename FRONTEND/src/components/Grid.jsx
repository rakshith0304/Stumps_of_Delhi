import React from "react";
import "../Main.css"; // Go one level up to access Main.css in the src folder

const Grid = () => {
  return (
    <div className="grid-main">
      <div className="grid-content1">
        <p className="grid-elements">Weather</p>
      </div>
      <div className="grid-content2">
        <p className="grid-elements">Live Score</p>
        <button className="grid-buttons">More</button>
      </div>
      <div className="grid-content3">
        <p className="grid-elements">Map with live count</p>
        <button className="grid-buttons">Book Box</button>
      </div>
    </div>
  );
};

export default Grid;