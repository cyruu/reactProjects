import React from "react";
import Content from "./Content";
import kobe from "../images/kobe.jpg";
function Card({ darkMode, lightMode }) {
  return (
    <div className="card">
      <div className="image" style={{ marginRight: "30px" }}>
        <img src={kobe} />
      </div>
      <div className="content">
        <Content darkMode={darkMode} lightMode={lightMode} />
      </div>
    </div>
  );
}
export default Card;
