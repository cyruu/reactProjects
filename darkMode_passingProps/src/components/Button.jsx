import React from "react";

function Button({ darkMode, lightMode }) {
  function handleChange({ target: t }) {
    if (t.checked) darkMode();
    else lightMode();
  }
  return (
    <div className="btn">
      <input type="checkbox" id="check" onChange={handleChange} />
      <label htmlFor="check" className="button">
        <span id="circle"></span>
      </label>
    </div>
  );
}
export default Button;
