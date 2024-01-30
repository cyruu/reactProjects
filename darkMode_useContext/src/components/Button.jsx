import React, { useContext } from "react";
import useTheme from "../context/ThemeContext";

function Button() {
  const { theme, darkMode, lightMode } = useTheme();
  function handleChange({ target: t }) {
    // darkmode enabled
    if (t.checked) {
      darkMode();
      const circle = document.querySelector("#circle");

      circle.style.left = "45px";
    } else {
      lightMode();
      const circle = document.querySelector("#circle");
      circle.style.left = "5px";
    }
  }
  return (
    <div className="btn">
      <input type="checkbox" id="check" onChange={handleChange} />
      <label htmlFor="check" className="button bg-black dark:bg-white">
        <span id="circle" className="dark:bg-black bg-white"></span>
      </label>
    </div>
  );
}
export default Button;
